import { Controller, Post, Get, Body, Param, UseGuards, Req } from '@nestjs/common';
import { DepositService } from './deposit.service';
import { CreateDepositDto, GetDepositDto, CloseDepositDto } from './dto/deposit.dto';
import { AuthResponseDto } from '../auth/dto/auth-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../auth/enums/user-role.enum';

@Controller('api/deposits')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

  // Создание депозита (только для родителей)
  @Post()
  @Roles(UserRole.PARENT)
  async createDeposit(
    @Req() req,
    @Body() createDepositDto: CreateDepositDto
  ) {
    const parentId = req.user.userId;
    const childId = req.body.childId; // Должен быть передан в теле запроса

    return this.depositService.createDeposit(parentId, childId, createDepositDto);
  }

  // Получение деталей депозита
  @Get(':id')
  async getDeposit(@Param() params: GetDepositDto) {
    return this.depositService.getDepositById(params);
  }

  // Получение депозитов ребенка (для родителей)
  @Get('child/:childId')
  @Roles(UserRole.PARENT)
  async getDepositsByChildId(@Param('childId') childId: string) {
    return this.depositService.getDepositsByChildId(childId);
  }

  // Получение депозитов по родителю (для родителей)
  @Get('parent/:parentId')
  @Roles(UserRole.PARENT)
  async getDepositsByParentId(@Param('parentId') parentId: string) {
    return this.depositService.getDepositsByParentId(parentId);
  }

  // Получение депозитов пользователя (для детей)
  @Get()
  @Roles(UserRole.CHILD)
  async getDepositsForChild(@Req() req) {
    const childId = req.user.userId;
    return this.depositService.getDepositsByChildId(childId);
  }

  // Закрытие депозита (только для родителей)
  @Post(':id/close')
  @Roles(UserRole.PARENT)
  async closeDeposit(
    @Req() req,
    @Param() params: CloseDepositDto
  ) {
    const parentId = req.user.userId;
    return this.depositService.closeDeposit(parentId, params);
  }
}