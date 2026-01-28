import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

// Request Type enum согласно документации
export enum RequestType {
  NEW_TASK = 'NEW_TASK',
  TASK_APPROVAL = 'TASK_APPROVAL',
  WISHLIST_PURCHASE = 'WISHLIST_PURCHASE',
  MONEY_WITHDRAW = 'MONEY_WITHDRAW',
  NEW_DEPOSIT = 'NEW_DEPOSIT'
}

// Request Status enum согласно документации
export enum RequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export class CreateRequestDto {
  @IsEnum(RequestType)
  @IsNotEmpty()
  type: RequestType;

  @IsString()
  @IsNotEmpty()
  childId: string;

  @IsOptional()
  payload?: any;
}

export class UpdateRequestDto {
  @IsEnum(RequestStatus)
  @IsOptional()
  status?: RequestStatus;

  @IsOptional()
  payload?: any;
}

export class GetRequestsDto {
  @IsString()
  @IsNotEmpty()
  childId: string;

  @IsEnum(RequestType)
  @IsOptional()
  type?: RequestType;

  @IsEnum(RequestStatus)
  @IsOptional()
  status?: RequestStatus;

  @IsOptional()
  limit?: number;

  @IsOptional()
  offset?: number;
}

export class RespondToRequestDto {
  @IsString()
  @IsNotEmpty()
  requestId: string;

  @IsEnum(RequestStatus)
  @IsNotEmpty()
  action: 'APPROVED' | 'REJECTED';

  @IsOptional()
  comment?: string;
}

// DTO для конкретных типов запросов
export class NewTaskRequestDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  reward?: number;

  @IsOptional()
  scheduleType?: string;

  @IsOptional()
  dueDate?: string;
}

export class WishlistPurchaseRequestDto {
  @IsString()
  @IsNotEmpty()
  wishlistItemId: string;

  @IsOptional()
  amount?: number;

  @IsString()
  @IsOptional()
  comment?: string;
}

export class MoneyWithdrawRequestDto {
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsOptional()
  comment?: string;
}

export class NewDepositRequestDto {
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  interestRate: number;

  @IsNotEmpty()
  duration: number; // в днях

  @IsString()
  @IsOptional()
  comment?: string;
}