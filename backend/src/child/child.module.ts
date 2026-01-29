import { Module } from '@nestjs/common';
import { ChildController } from './child.controller';
import { UserService } from '../user/user.service';
import { PrismaModule } from '../common/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ChildController],
  providers: [UserService],
  exports: [UserService],
})
export class ChildModule {}