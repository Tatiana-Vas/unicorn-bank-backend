import { Module } from '@nestjs/common';
import { ParentController } from './parent.controller';
import { UserService } from '../user/user.service';
import { PrismaModule } from '../common/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ParentController],
  providers: [UserService],
  exports: [UserService],
})
export class ParentModule {}