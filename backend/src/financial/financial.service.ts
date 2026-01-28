import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateAccountDto, CreateTransactionDto, GetAccountDto, GetTransactionsDto, TopUpDto, WithdrawDto, TransactionSource } from './dto/financial.dto';

@Injectable()
export class FinancialService {
  constructor(private prisma: PrismaService) {}

  async createAccount(createAccountDto: CreateAccountDto): Promise<any> {
    // SpendingAccount создается без баланса, баланс вычисляется из транзакций
    return (this.prisma as any).spendingAccount.create({
      data: {
        childId: createAccountDto.childId,
      },
    });
  }

  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<any> {
    const account = await (this.prisma as any).spendingAccount.findUnique({
      where: { id: createTransactionDto.accountId },
    });

    if (!account) {
      throw new Error('Account not found');
    }

    // Создаем транзакцию - баланс НЕ хранится в аккаунте
    const transaction = await (this.prisma as any).transaction.create({
      data: {
        amount: createTransactionDto.amount,
        source: createTransactionDto.source || TransactionSource.MANUAL_TOPUP,
        comment: createTransactionDto.comment,
        spendingAccountId: createTransactionDto.accountId,
      },
    });

    return transaction;
  }

  async getAccount(getAccountDto: GetAccountDto): Promise<any | null> {
    const account = await (this.prisma as any).spendingAccount.findUnique({
      where: { id: getAccountDto.accountId },
      include: {
        transactions: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    if (!account) return null;

    // Вычисляем баланс из транзакций
    const balance = await this.calculateBalance(getAccountDto.accountId);
    
    return {
      ...account,
      balance,
    };
  }

  async getTransactions(getTransactionsDto: GetTransactionsDto): Promise<any[]> {
    const { accountId, limit = 10, offset = 0 } = getTransactionsDto;

    return (this.prisma as any).transaction.findMany({
      where: { spendingAccountId: accountId },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      skip: offset,
    });
  }

  async getAccountBalance(accountId: string): Promise<number> {
    return this.calculateBalance(accountId);
  }

  async getAccountsByChildId(childId: string): Promise<any[]> {
    const accounts = await (this.prisma as any).spendingAccount.findMany({
      where: { childId },
      include: {
        transactions: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5, // Последние 5 транзакций
        },
      },
    });

    // Вычисляем баланс для каждого аккаунта
    return await Promise.all(
      accounts.map(async (account: any) => ({
        ...account,
        balance: await this.calculateBalance(account.id),
      }))
    );
  }

  async getAccountsByParentId(parentId: string): Promise<any[]> {
    const accounts = await (this.prisma as any).spendingAccount.findMany({
      where: {
        child: {
          parents: {
            some: {
              parentId,
            },
          },
        },
      },
      include: {
        transactions: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5, // Последние 5 транзакций
        },
        child: true,
      },
    });

    // Вычисляем баланс для каждого аккаунта
    return await Promise.all(
      accounts.map(async (account: any) => ({
        ...account,
        balance: await this.calculateBalance(account.id),
      }))
    );
  }

  private async calculateBalance(accountId: string): Promise<number> {
    const transactions = await (this.prisma as any).transaction.findMany({
      where: { spendingAccountId: accountId },
    });

    // Баланс = сумма всех транзакций (положительные - доход, отрицательные - расход)
    return transactions.reduce((balance: number, transaction: any) => {
      return balance + Number(transaction.amount);
    }, 0);
  }

  // Ручное пополнение счета (карманные деньги)
  async topUpAccount(accountId: string, amount: number, comment?: string): Promise<any> {
    const account = await (this.prisma as any).spendingAccount.findUnique({
      where: { id: accountId },
    });

    if (!account) {
      throw new Error('Account not found');
    }

    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }

    return (this.prisma as any).transaction.create({
      data: {
        amount,
        source: 'MANUAL_TOPUP',
        comment: comment || 'Manual top-up',
        spendingAccountId: accountId,
      },
    });
  }

  // Списание средств (покупка или снятие наличных)
  async withdrawFromAccount(accountId: string, amount: number, source: string, comment?: string): Promise<any> {
    const currentBalance = await this.calculateBalance(accountId);
    
    if (currentBalance < amount) {
      throw new Error('Insufficient funds');
    }

    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }

    return (this.prisma as any).transaction.create({
      data: {
        amount: -amount, // Отрицательная сумма для списания
        source: source as any, // PURCHASE или CASH
        comment: comment || `Withdrawal: ${source}`,
        spendingAccountId: accountId,
      },
    });
  }
}