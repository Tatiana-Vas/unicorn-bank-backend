import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './common/prisma/prisma.module';
import { HealthModule } from './common/health/health.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { FinancialModule } from './financial/financial.module';
import { TaskModule } from './task/task.module';
import { MiddlewareModule } from './common/middleware/middleware.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [PrismaModule, HealthModule, AuthModule, UserModule, FinancialModule, TaskModule, RequestModule, MiddlewareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
