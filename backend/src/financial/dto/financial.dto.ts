import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, IsEnum } from 'class-validator';

// Transaction source enum согласно документации
export enum TransactionSource {
  TASK_REWARD = 'TASK_REWARD',
  POCKET_MONEY = 'POCKET_MONEY',
  INTEREST = 'INTEREST',
  MANUAL_TOPUP = 'MANUAL_TOPUP',
  GIFT = 'GIFT',
  BONUS = 'BONUS',
  CASH = 'CASH',
  PURCHASE = 'PURCHASE'
}

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  childId: string;
}

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsString()
  @IsOptional()
  comment?: string;

  @IsEnum(TransactionSource)
  @IsOptional()
  source?: TransactionSource;
}

export class TopUpDto {
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsString()
  @IsOptional()
  comment?: string;
}

export class WithdrawDto {
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsEnum(TransactionSource)
  @IsNotEmpty()
  source: TransactionSource;

  @IsString()
  @IsOptional()
  comment?: string;
}

export class GetAccountDto {
  @IsString()
  @IsNotEmpty()
  accountId: string;
}

export class GetTransactionsDto {
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @IsOptional()
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsNumber()
  offset?: number;
}