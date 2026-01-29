import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { FinancialService } from '../financial/financial.service';
import { CreateDepositDto, GetDepositDto, CloseDepositDto, DepositDetails } from './dto/deposit.dto';
import { AuthResponseDto } from '../auth/dto/auth-response.dto';
import { UserRole } from '../auth/enums/user-role.enum';

@Injectable()
export class DepositService {
  constructor(
    private prisma: PrismaService,
    private financialService: FinancialService,
  ) {}

  async createDeposit(parentId: string, childId: string, createDepositDto: CreateDepositDto): Promise<AuthResponseDto> {
    // Проверяем, что родитель имеет доступ к ребенку
    const parentChild = await (this.prisma as any).parentChild.findUnique({
      where: {
        parentId_childId: {
          parentId,
          childId,
        },
      },
    });

    if (!parentChild) {
      throw new Error('Parent does not have access to this child');
    }

    // Проверяем, что у ребенка есть spending account
    const spendingAccount = await (this.prisma as any).spendingAccount.findUnique({
      where: { childId },
    });

    if (!spendingAccount) {
      throw new Error('Child does not have a spending account');
    }

    // Вычисляем баланс счета
    const balance = await this.financialService.getAccountBalance(spendingAccount.id);

    // Проверяем достаточность средств
    if (typeof balance === 'number' && balance < createDepositDto.amount) {
      throw new Error('Insufficient funds for deposit');
    }

    // Рассчитываем дату окончания (по умолчанию через год)
    const startsAt = new Date();
    const endsAt = createDepositDto.endsAt || new Date();
    if (!createDepositDto.endsAt) {
      endsAt.setFullYear(startsAt.getFullYear() + 1);
    }

    // Списываем средства со spending account
    await this.financialService.withdrawFromAccount(
      spendingAccount.id,
      createDepositDto.amount,
      'DEPOSIT',
      'Deposit creation'
    );

    // Создаем депозит
    const deposit = await (this.prisma as any).deposit.create({
      data: {
        amount: createDepositDto.amount,
        interestRate: createDepositDto.interestRate,
        startsAt,
        endsAt,
        childId,
      },
    });

    const depositDetails = await this.getDepositDetails(deposit.id);

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { depositId: deposit.id, sub: childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: depositDetails,
    });
  }

  async getDepositById(getDepositDto: GetDepositDto): Promise<AuthResponseDto | null> {
    const deposit = await (this.prisma as any).deposit.findUnique({
      where: { id: getDepositDto.depositId },
    });

    if (!deposit) {
      return null;
    }

    const depositDetails = await this.getDepositDetails(deposit.id);

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { depositId: deposit.id, sub: deposit.childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: depositDetails,
    });
  }

  async getDepositsByChildId(childId: string): Promise<AuthResponseDto[]> {
    const deposits = await (this.prisma as any).deposit.findMany({
      where: { childId },
      orderBy: { createdAt: 'desc' },
    });

    const depositsWithDetails = await Promise.all(deposits.map(deposit => this.getDepositDetails(deposit.id)));

    return Promise.all(depositsWithDetails.map(async (depositDetails: any) => {
      // Создаем JWT токен для каждого депозита
      const jwtService = new (require('@nestjs/jwt').JwtService)({
        secret: process.env.JWT_SECRET || 'default-secret',
        signOptions: { expiresIn: '1h' },
      });

      const payload = { depositId: depositDetails.id, sub: depositDetails.childId, role: UserRole.PARENT };
      const accessToken = jwtService.sign(payload);

      return new AuthResponseDto({
        accessToken,
        user: depositDetails,
      });
    }));
  }

  async getDepositsByParentId(parentId: string): Promise<AuthResponseDto[]> {
    const deposits = await (this.prisma as any).deposit.findMany({
      where: {
        child: {
          parents: {
            some: {
              parentId,
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    const depositsWithDetails = await Promise.all(deposits.map(deposit => this.getDepositDetails(deposit.id)));

    return Promise.all(depositsWithDetails.map(async (depositDetails: any) => {
      // Создаем JWT токен для каждого депозита
      const jwtService = new (require('@nestjs/jwt').JwtService)({
        secret: process.env.JWT_SECRET || 'default-secret',
        signOptions: { expiresIn: '1h' },
      });

      const payload = { depositId: depositDetails.id, sub: depositDetails.childId, role: UserRole.PARENT };
      const accessToken = jwtService.sign(payload);

      return new AuthResponseDto({
        accessToken,
        user: depositDetails,
      });
    }));
  }

  async closeDeposit(parentId: string, closeDepositDto: CloseDepositDto): Promise<AuthResponseDto> {
    const deposit = await (this.prisma as any).deposit.findUnique({
      where: { id: closeDepositDto.depositId },
      include: { child: true },
    });

    if (!deposit) {
      throw new Error('Deposit not found');
    }

    // Проверяем, что родитель имеет доступ к ребенку
    const parentChild = await (this.prisma as any).parentChild.findUnique({
      where: {
        parentId_childId: {
          parentId,
          childId: deposit.childId,
        },
      },
    });

    if (!parentChild) {
      throw new Error('Parent does not have access to this child');
    }

    if (deposit.status === 'CLOSED') {
      throw new Error('Deposit is already closed');
    }

    // Рассчитываем проценты
    const { totalAccrual, currentAccrual } = this.calculateAccruals(deposit);

    // Зачисляем деньги и проценты на spending account
    const spendingAccount = await (this.prisma as any).spendingAccount.findUnique({
      where: { childId: deposit.childId },
    });

    if (spendingAccount) {
      // Зачисляем основную сумму
      await this.financialService.topUpAccount(
        spendingAccount.id,
        deposit.amount,
        'Deposit closure - principal amount'
      );

      // Зачисляем проценты
      if (totalAccrual > 0) {
        await this.financialService.topUpAccount(
          spendingAccount.id,
          totalAccrual,
          'Deposit closure - interest'
        );
      }
    }

    // Закрываем депозит
    const closedDeposit = await (this.prisma as any).deposit.update({
      where: { id: deposit.id },
      data: {
        status: 'CLOSED',
        closedAt: new Date(),
      },
    });

    const depositDetails = await this.getDepositDetails(closedDeposit.id);

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { depositId: closedDeposit.id, sub: closedDeposit.childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: depositDetails,
    });
  }

  private async getDepositDetails(depositId: string): Promise<DepositDetails> {
    const deposit = await (this.prisma as any).deposit.findUnique({
      where: { id: depositId },
    });

    if (!deposit) {
      throw new Error('Deposit not found');
    }

    const {
      totalAccrual,
      currentAccrual,
      dailyAccrual
    } = this.calculateAccruals(deposit);

    return {
      id: deposit.id,
      amount: deposit.amount,
      interestRate: deposit.interestRate,
      startsAt: deposit.startsAt,
      endsAt: deposit.endsAt,
      status: deposit.status,
      currentAccrual,
      dailyAccrual,
      totalAccrual,
      childId: deposit.childId,
      createdAt: deposit.createdAt,
      closedAt: deposit.closedAt,
    };
  }

  private calculateAccruals(deposit: any): {
    totalAccrual: number;
    currentAccrual: number;
    dailyAccrual: number;
  } {
    const now = new Date();
    const startDate = new Date(deposit.startsAt);
    const endDate = new Date(deposit.endsAt);

    // Определяем, сколько дней прошло
    let daysPassed: number;
    let totalDays: number;

    if (deposit.status === 'CLOSED' && deposit.closedAt) {
      // Депозит закрыт - считаем по дате закрытия
      daysPassed = Math.floor((new Date(deposit.closedAt).getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    } else {
      // Депозит активен - считаем по текущей дате
      const currentDate = now > endDate ? endDate : now;
      daysPassed = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    // Ежедневный прирост
    const dailyAccrual = (deposit.amount * deposit.interestRate) / 365;

    // Общая сумма процентов
    const totalAccrual = dailyAccrual * daysPassed;

    // Накоплено на сегодня (основная сумма + проценты)
    const currentAccrual = deposit.amount + totalAccrual;

    return {
      totalAccrual,
      currentAccrual,
      dailyAccrual,
    };
  }
}