import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateTaskDto, UpdateTaskDto, GetTasksDto, CompleteTaskDto } from './dto/task.dto';
import { AuthResponseDto } from '../auth/dto/auth-response.dto';
import { UserRole } from '../auth/enums/user-role.enum';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<AuthResponseDto> {
    const task = await (this.prisma as any).task.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
        reward: createTaskDto.reward,
        dueDate: createTaskDto.dueDate ? new Date(createTaskDto.dueDate) : null,
        status: createTaskDto.status,
        childId: createTaskDto.childId,
      },
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { taskId: task.id, sub: task.childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: task,
    });
  }

  async updateTask(taskId: string, updateTaskDto: UpdateTaskDto): Promise<AuthResponseDto> {
    const task = await (this.prisma as any).task.update({
      where: { id: taskId },
      data: updateTaskDto,
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { taskId: task.id, sub: task.childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: task,
    });
  }

  async completeTask(completeTaskDto: CompleteTaskDto): Promise<AuthResponseDto> {
    const task = await (this.prisma as any).task.findUnique({
      where: { id: completeTaskDto.taskId },
    });

    if (!task) {
      throw new Error('Task not found');
    }

    if (task.childId !== completeTaskDto.childId) {
      throw new Error('Task does not belong to this child');
    }

    // Обновляем статус задачи
    const updatedTask = await (this.prisma as any).task.update({
      where: { id: completeTaskDto.taskId },
      data: {
        status: 'completed',
        completedAt: new Date(),
      },
    });

    // Начисляем вознаграждение на счет ребенка
    if (task.reward > 0) {
      await this.creditChildReward(completeTaskDto.childId, task.reward);
    }

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { taskId: updatedTask.id, sub: updatedTask.childId, role: UserRole.CHILD };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: updatedTask,
    });
  }

  async getTaskById(taskId: string): Promise<AuthResponseDto | null> {
    const task = await (this.prisma as any).task.findUnique({
      where: { id: taskId },
      include: {
        child: true,
      },
    });

    if (!task) return null;

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { taskId: task.id, sub: task.childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: task,
    });
  }

  async getTasksByChildId(getTasksDto: GetTasksDto): Promise<AuthResponseDto[]> {
    const { childId, status } = getTasksDto;

    const tasks = await (this.prisma as any).task.findMany({
      where: {
        childId,
        ...(status && { status }),
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        child: true,
      },
    });

    return Promise.all(tasks.map(async (task: any) => {
      // Создаем JWT токен для каждой задачи
      const jwtService = new (require('@nestjs/jwt').JwtService)({
        secret: process.env.JWT_SECRET || 'default-secret',
        signOptions: { expiresIn: '1h' },
      });

      const payload = { taskId: task.id, sub: task.childId, role: UserRole.PARENT };
      const accessToken = jwtService.sign(payload);

      return new AuthResponseDto({
        accessToken,
        user: task,
      });
    }));
  }

  async getTasksByParentId(parentId: string): Promise<AuthResponseDto[]> {
    const tasks = await (this.prisma as any).task.findMany({
      where: {
        child: {
          parentId,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        child: true,
      },
    });

    return Promise.all(tasks.map(async (task: any) => {
      // Создаем JWT токен для каждой задачи
      const jwtService = new (require('@nestjs/jwt').JwtService)({
        secret: process.env.JWT_SECRET || 'default-secret',
        signOptions: { expiresIn: '1h' },
      });

      const payload = { taskId: task.id, sub: task.childId, role: UserRole.PARENT };
      const accessToken = jwtService.sign(payload);

      return new AuthResponseDto({
        accessToken,
        user: task,
      });
    }));
  }

  async deleteTask(taskId: string): Promise<AuthResponseDto> {
    const task = await (this.prisma as any).task.delete({
      where: { id: taskId },
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { taskId, sub: task.childId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: task,
    });
  }

  private async creditChildReward(childId: string, reward: number): Promise<void> {
    // Находим активный счет ребенка для начисления вознаграждения
    const account = await (this.prisma as any).spendingAccount.findFirst({
      where: { childId },
      orderBy: { createdAt: 'desc' },
    });

    if (account) {
      // Создаем транзакцию начисления вознаграждения
      await (this.prisma as any).transaction.create({
        data: {
          amount: reward,
          source: 'TASK_REWARD',
          comment: 'Task completion reward',
          spendingAccountId: account.id,
        },
      });
    }
  }
}
