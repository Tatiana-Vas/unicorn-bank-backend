import { IsNumber, IsDate, IsEnum, IsString, IsOptional } from 'class-validator';

export class CreateDepositDto {
  @IsNumber()
  amount: number;

  @IsNumber()
  interestRate: number;

  @IsDate()
  @IsOptional()
  endsAt?: Date;
}

export class GetDepositDto {
  @IsString()
  depositId: string;
}

export class CloseDepositDto {
  @IsString()
  depositId: string;
}

export class DepositDetails {
  id: string;
  amount: number;
  interestRate: number;
  startsAt: Date;
  endsAt: Date;
  status: 'ACTIVE' | 'CLOSED';
  currentAccrual: number;   // Накоплено на сегодня (включая проценты)
  dailyAccrual: number;     // Ежедневный прирост
  totalAccrual: number;     // Общая сумма процентов
  childId: string;
  createdAt: Date;
  closedAt: Date | null;
}