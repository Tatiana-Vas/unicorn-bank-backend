import { Module } from '@nestjs/common';
import { DepositController } from './deposit.controller';
import { DepositService } from './deposit.service';
import { PrismaModule } from '../common/prisma/prisma.module';
import { FinancialModule } from '../financial/financial.module';

@Module({
  imports: [PrismaModule, FinancialModule],
  controllers: [DepositController],
  providers: [DepositService],
  exports: [DepositService],
})
export class DepositModule {}