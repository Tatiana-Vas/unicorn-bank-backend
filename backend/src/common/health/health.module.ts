import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { PrismaModule } from '../prisma/prisma.module';
import { DatabaseHealthIndicator, HealthService } from './health.service';

@Module({
  imports: [TerminusModule, PrismaModule],
  providers: [DatabaseHealthIndicator, HealthService],
  exports: [HealthService],
})
export class HealthModule {}
