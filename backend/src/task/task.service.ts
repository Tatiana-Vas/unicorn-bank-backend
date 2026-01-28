import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateTaskDto, UpdateTaskDto, GetTasksDto, CompleteTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async createTask(createTaskDto: CreateTaskDto) {
    return (this.prisma as any).task.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
        reward: createTaskDto.reward,
        dueDate: createTaskDto.dueDate ? new Date(createTaskDto.dueDate) : null,
        status: createTaskDto.status,
        childId: createTaskDto.childId,
      },
    });
  }

  async updateTask(taskId: string, updateTaskDto: UpdateTaskDto) {
    return (this.prisma as any).task.update({
      where: { id: taskId },
      data: updateTaskDto,
    });
  }

  async completeTask(completeTaskDto: CompleteTaskDto) {
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

    return updatedTask;
  }

  async getTaskById(taskId: string) {
    return (this.prisma as any).task.findUnique({
      where: { id: taskId },
      include: {
        child: true,
      },
    });
  }

  async getTasksByChildId(getTasksDto: GetTasksDto) {
    const { childId, status } = getTasksDto;

    return (this.prisma as any).task.findMany({
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
  }

  async getTasksByParentId(parentId: string) {
    return (this.prisma as any).task.findMany({
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
  }

  async deleteTask(taskId: string) {
    return (this.prisma as any).task.delete({
      where: { id: taskId },
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
      await (this.prisma as any).$transaction([
        (this.prisma as any).transaction.create({
          data: {
            amount: reward,
            description: 'Task completion reward',
            type: 'income',
            accountId: account.id,
            balanceAfter: account.balance + reward,
          },
        }),
        (this.prisma as any).spendingAccount.update({
          where: { id: account.id },
          data: {
            balance: {
              increment: reward,
            },
          },
        }),
      ]);
    }
  }
}
