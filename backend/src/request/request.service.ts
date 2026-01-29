import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { 
  CreateRequestDto, 
  UpdateRequestDto, 
  GetRequestsDto, 
  RespondToRequestDto,
  RequestType,
  RequestStatus,
  NewTaskRequestDto,
  WishlistPurchaseRequestDto,
  MoneyWithdrawRequestDto,
  NewDepositRequestDto
} from './dto/request.dto';
import { AuthResponseDto } from '../auth/dto/auth-response.dto';
import { UserRole } from '../auth/enums/user-role.enum';

@Injectable()
export class RequestService {
  constructor(private prisma: PrismaService) {}

  async createRequest(createRequestDto: CreateRequestDto): Promise<AuthResponseDto> {
    const request = await (this.prisma as any).request.create({
      data: {
        type: createRequestDto.type,
        status: RequestStatus.PENDING,
        childId: createRequestDto.childId,
        payload: createRequestDto.payload || {},
      },
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { requestId: request.id, sub: request.childId, role: UserRole.CHILD };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: request,
    });
  }

  async getRequestById(requestId: string): Promise<AuthResponseDto | null> {
    const request = await (this.prisma as any).request.findUnique({
      where: { id: requestId },
      include: {
        child: true,
      },
    });

    if (!request) return null;

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { requestId: request.id, sub: request.childId, role: UserRole.CHILD };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: request,
    });
  }

  async getRequests(getRequestsDto: GetRequestsDto): Promise<AuthResponseDto[]> {
    const { childId, type, status, limit = 10, offset = 0 } = getRequestsDto;

    const where: any = { childId };
    
    if (type) {
      where.type = type;
    }
    
    if (status) {
      where.status = status;
    }

    const requests = await (this.prisma as any).request.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      skip: offset,
      include: {
        child: true,
      },
    });

    return Promise.all(requests.map(async (request: any) => {
      // Создаем JWT токен для каждого запроса
      const jwtService = new (require('@nestjs/jwt').JwtService)({
        secret: process.env.JWT_SECRET || 'default-secret',
        signOptions: { expiresIn: '1h' },
      });

      const payload = { requestId: request.id, sub: request.childId, role: UserRole.CHILD };
      const accessToken = jwtService.sign(payload);

      return new AuthResponseDto({
        accessToken,
        user: request,
      });
    }));
  }

  async getRequestsForParent(parentId: string): Promise<AuthResponseDto[]> {
    // Получаем заявки от детей этого родителя
    const requests = await (this.prisma as any).request.findMany({
      where: {
        child: {
          parents: {
            some: {
              parentId,
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        child: true,
      },
    });

    return Promise.all(requests.map(async (request: any) => {
      // Создаем JWT токен для каждого запроса
      const jwtService = new (require('@nestjs/jwt').JwtService)({
        secret: process.env.JWT_SECRET || 'default-secret',
        signOptions: { expiresIn: '1h' },
      });

      const payload = { requestId: request.id, sub: request.childId, role: UserRole.PARENT };
      const accessToken = jwtService.sign(payload);

      return new AuthResponseDto({
        accessToken,
        user: request,
      });
    }));
  }

  async respondToRequest(respondDto: RespondToRequestDto): Promise<AuthResponseDto> {
    const request = await (this.prisma as any).request.findUnique({
      where: { id: respondDto.requestId },
    });

    if (!request) {
      throw new Error('Request not found');
    }

    if (request.status !== RequestStatus.PENDING) {
      throw new Error('Request already resolved');
    }

    // Обновляем статус заявки
    const updatedRequest = await (this.prisma as any).request.update({
      where: { id: respondDto.requestId },
      data: {
        status: respondDto.action,
        resolvedAt: new Date(),
        payload: {
          ...request.payload,
          resolutionComment: respondDto.comment,
        },
      },
    });

    // Обрабатываем бизнес-логику для разных типов заявок
    await this.processRequestResolution(updatedRequest);

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { requestId: updatedRequest.id, sub: updatedRequest.childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: updatedRequest,
    });
  }

  async createTaskRequest(childId: string, taskData: NewTaskRequestDto): Promise<AuthResponseDto> {
    return this.createRequest({
      type: RequestType.NEW_TASK,
      childId,
      payload: taskData,
    });
  }

  async createWishlistPurchaseRequest(
    childId: string, 
    requestData: WishlistPurchaseRequestDto
  ): Promise<AuthResponseDto> {
    return this.createRequest({
      type: RequestType.WISHLIST_PURCHASE,
      childId,
      payload: requestData,
    });
  }

  async createMoneyWithdrawRequest(
    childId: string, 
    requestData: MoneyWithdrawRequestDto
  ): Promise<AuthResponseDto> {
    return this.createRequest({
      type: RequestType.MONEY_WITHDRAW,
      childId,
      payload: requestData,
    });
  }

  async createNewDepositRequest(
    childId: string, 
    requestData: NewDepositRequestDto
  ): Promise<AuthResponseDto> {
    return this.createRequest({
      type: RequestType.NEW_DEPOSIT,
      childId,
      payload: requestData,
    });
  }

  private async processRequestResolution(request: any): Promise<void> {
    switch (request.type) {
      case RequestType.TASK_APPROVAL:
        await this.processTaskApproval(request);
        break;
      
      case RequestType.WISHLIST_PURCHASE:
        await this.processWishlistPurchase(request);
        break;
      
      case RequestType.MONEY_WITHDRAW:
        await this.processMoneyWithdraw(request);
        break;
      
      case RequestType.NEW_DEPOSIT:
        await this.processNewDeposit(request);
        break;
      
      default:
        // Для NEW_TASK обрабатывается отдельно при создании
        break;
    }
  }

  private async processTaskApproval(request: any): Promise<void> {
    if (request.status !== RequestStatus.APPROVED) {
      return;
    }

    const { taskInstanceId } = request.payload;
    if (!taskInstanceId) {
      throw new Error('Task instance ID is required for task approval');
    }

    // Обновляем статус TaskInstance
    await (this.prisma as any).taskInstance.update({
      where: { id: taskInstanceId },
      data: {
        status: 'APPROVED',
        approvedAt: new Date(),
      },
    });

    // Находим TaskInstance для начисления вознаграждения
    const taskInstance = await (this.prisma as any).taskInstance.findUnique({
      where: { id: taskInstanceId },
      include: { task: true },
    });

    if (taskInstance && taskInstance.task) {
      // Создаем транзакцию вознаграждения
      await (this.prisma as any).transaction.create({
        data: {
          amount: taskInstance.task.reward,
          source: 'TASK_REWARD',
          comment: `Task reward: ${taskInstance.task.title}`,
          spendingAccountId: taskInstance.childId, // Временно, нужно найти правильный аккаунт
        },
      });
    }
  }

  private async processWishlistPurchase(request: any): Promise<void> {
    if (request.status !== RequestStatus.APPROVED) {
      return;
    }

    const { amount, comment } = request.payload;
    if (!amount) {
      throw new Error('Amount is required for wishlist purchase');
    }

    // Списываем средства со счета ребенка
    await this.withdrawFromChildAccount(request.childId, amount, 'PURCHASE', comment);
  }

  private async processMoneyWithdraw(request: any): Promise<void> {
    if (request.status !== RequestStatus.APPROVED) {
      return;
    }

    const { amount, comment } = request.payload;
    if (!amount) {
      throw new Error('Amount is required for money withdraw');
    }

    // Списываем средства со счета ребенка
    await this.withdrawFromChildAccount(request.childId, amount, 'CASH', comment);
  }

  private async processNewDeposit(request: any): Promise<void> {
    if (request.status !== RequestStatus.APPROVED) {
      return;
    }

    const { amount, interestRate, duration } = request.payload;
    if (!amount || !interestRate || !duration) {
      throw new Error('Amount, interest rate and duration are required for deposit');
    }

    // Создаем депозит
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + duration);

    await (this.prisma as any).deposit.create({
      data: {
        amount,
        interestRate,
        startsAt: startDate,
        endsAt: endDate,
        childId: request.childId,
      },
    });
  }

  private async withdrawFromChildAccount(
    childId: string, 
    amount: number, 
    source: string, 
    comment?: string
  ): Promise<void> {
    // Находим счет ребенка
    const account = await (this.prisma as any).spendingAccount.findFirst({
      where: { childId },
    });

    if (!account) {
      throw new Error('Child account not found');
    }

    // Вычисляем текущий баланс
    const transactions = await (this.prisma as any).transaction.findMany({
      where: { spendingAccountId: account.id },
    });

    const currentBalance = transactions.reduce((balance: number, transaction: any) => {
      return balance + Number(transaction.amount);
    }, 0);

    if (currentBalance < amount) {
      throw new Error('Insufficient funds');
    }

    // Создаем транзакцию списания
    await (this.prisma as any).transaction.create({
      data: {
        amount: -amount,
        source,
        comment: comment || `Withdrawal: ${source}`,
        spendingAccountId: account.id,
      },
    });
  }
}