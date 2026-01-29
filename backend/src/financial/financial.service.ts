import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateAccountDto, CreateTransactionDto, GetAccountDto, GetTransactionsDto, TopUpDto, WithdrawDto, TransactionSource } from './dto/financial.dto';
import { AuthResponseDto } from '../auth/dto/auth-response.dto';
import { UserRole } from '../auth/enums/user-role.enum';

@Injectable()
export class FinancialService {
  constructor(private prisma: PrismaService) {}

  async createAccount(createAccountDto: CreateAccountDto): Promise<AuthResponseDto> {
    // SpendingAccount создается без баланса, баланс вычисляется из транзакций
    const account = await (this.prisma as any).spendingAccount.create({
      data: {
        childId: createAccountDto.childId,
      },
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { accountId: account.id, sub: account.childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: account,
    });
  }

  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<AuthResponseDto> {
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

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { transactionId: transaction.id, sub: transaction.spendingAccountId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: transaction,
    });
  }

  async getAccount(getAccountDto: GetAccountDto): Promise<AuthResponseDto | null> {
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
    
    const accountWithBalance = {
      ...account,
      balance,
    };

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { accountId: account.id, sub: account.childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: accountWithBalance,
    });
  }

  async getTransactions(getTransactionsDto: GetTransactionsDto): Promise<AuthResponseDto> {
    const { accountId, limit = 10, offset = 0 } = getTransactionsDto;

    const transactions = await (this.prisma as any).transaction.findMany({
      where: { spendingAccountId: accountId },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      skip: offset,
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { accountId, sub: accountId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: transactions,
    });
  }

  async getAccountBalance(accountId: string): Promise<AuthResponseDto> {
    const balance = await this.calculateBalance(accountId);

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { accountId, balance, sub: accountId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: { balance, accountId },
    });
  }

  async getAccountsByChildId(childId: string): Promise<AuthResponseDto> {
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
    const accountsWithBalance = await Promise.all(
      accounts.map(async (account: any) => ({
        ...account,
        balance: await this.calculateBalance(account.id),
      }))
    );

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { childId, sub: childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: accountsWithBalance,
    });
  }

  async getAccountsByParentId(parentId: string): Promise<AuthResponseDto> {
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
    const accountsWithBalance = await Promise.all(
      accounts.map(async (account: any) => ({
        ...account,
        balance: await this.calculateBalance(account.id),
      }))
    );

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { parentId, sub: parentId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: accountsWithBalance,
    });
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