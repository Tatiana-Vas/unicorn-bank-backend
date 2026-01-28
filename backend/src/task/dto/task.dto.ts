import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)
  reward: number;

  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @IsString()
  @IsNotEmpty()
  childId: string;

  @IsString()
  @IsOptional()
  status: 'pending' | 'in_progress' | 'completed' = 'pending';
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  reward?: number;

  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @IsString()
  @IsOptional()
  status?: 'pending' | 'in_progress' | 'completed';
}

export class GetTasksDto {
  @IsString()
  @IsNotEmpty()
  childId: string;

  @IsString()
  @IsOptional()
  status?: 'pending' | 'in_progress' | 'completed';
}

export class CompleteTaskDto {
  @IsString()
  @IsNotEmpty()
  taskId: string;

  @IsString()
  @IsNotEmpty()
  childId: string;
}