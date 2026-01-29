import { Controller, Post, Body, Param, Get, UseGuards, Req } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../auth/enums/user-role.enum';
import { SetPinDto } from '../auth/dto/set-pin.dto';
import { JoinChildDto } from '../auth/dto/join-child.dto';
import { AuthResponseDto } from '../auth/dto/auth-response.dto';
import * as bcrypt from 'bcrypt';

@Controller('api/children')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ChildController {
  constructor(private readonly userService: UserService) {}

  // Установка PIN для ребенка (для родителей)
  @Post(':childId/set-pin')
  @Roles(UserRole.PARENT)
  async setPin(@Req() req, @Param('childId') childId: string, @Body() setPinDto: SetPinDto) {
    const parentId = req.user.userId;
    
    // Проверяем, что родитель имеет доступ к ребенку
    const hasAccess = await this.userService.checkParentAccess(parentId, childId);
    if (!hasAccess) {
      throw new Error('Parent does not have access to this child');
    }

    // Устанавливаем PIN для ребенка
    await this.userService.setChildPin(childId, setPinDto.pin);
    return { message: 'PIN set successfully' };
  }

  // Получение информации о ребенке
  @Get(':childId')
  @Roles(UserRole.PARENT, UserRole.CHILD)
  async getChildInfo(@Req() req, @Param('childId') childId: string) {
    const userRole = req.user.role;
    const userId = req.user.userId;

    return this.userService.getChildInfoWithAccessCheck(userId, userRole, childId);
  }

  // Присоединение ребенка по коду приглашения
  @Post('join')
  async joinChild(@Body() joinChildDto: JoinChildDto) {
    return this.userService.joinChildByInvitationCode(joinChildDto.invitationCode, joinChildDto.pin);
  }
}