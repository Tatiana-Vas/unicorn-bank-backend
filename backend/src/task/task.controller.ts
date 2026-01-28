import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto, GetTasksDto, CompleteTaskDto } from './dto/task.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../auth/enums/user-role.enum';

@Controller('api/tasks')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @Roles(UserRole.PARENT)
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Put(':taskId')
  @Roles(UserRole.PARENT)
  async updateTask(@Param('taskId') taskId: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.updateTask(taskId, updateTaskDto);
  }

  @Post(':taskId/complete')
  @Roles(UserRole.CHILD)
  async completeTask(@Param('taskId') taskId: string, @Body() completeTaskDto: CompleteTaskDto) {
    return this.taskService.completeTask(completeTaskDto);
  }

  @Get(':taskId')
  @Roles(UserRole.PARENT, UserRole.CHILD)
  async getTaskById(@Param('taskId') taskId: string) {
    return this.taskService.getTaskById(taskId);
  }

  @Get('child/:childId')
  @Roles(UserRole.PARENT, UserRole.CHILD)
  async getTasksByChildId(@Param() getTasksDto: GetTasksDto) {
    return this.taskService.getTasksByChildId(getTasksDto);
  }

  @Get('parent/:parentId')
  @Roles(UserRole.PARENT)
  async getTasksByParentId(@Param('parentId') parentId: string) {
    return this.taskService.getTasksByParentId(parentId);
  }

  @Delete(':taskId')
  @Roles(UserRole.PARENT)
  async deleteTask(@Param('taskId') taskId: string) {
    return this.taskService.deleteTask(taskId);
  }
}