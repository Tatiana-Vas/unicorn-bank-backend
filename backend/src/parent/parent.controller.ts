import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../auth/enums/user-role.enum';
import { CreateUserDto } from '../user/dto/user.dto';
import { AuthResponseDto } from '../auth/dto/auth-response.dto';

@Controller('api/parents')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ParentController {
  constructor(private readonly userService: UserService) {}

  // Получение списка детей родителя
  @Get('children')
  @Roles(UserRole.PARENT)
  async getChildren(@Req() req) {
    const parentId = req.user.userId;
    return this.userService.getChildrenByParentId(parentId);
  }

  // Создание ребенка
  @Post('children')
  @Roles(UserRole.PARENT)
  async createChild(@Req() req, @Body() createUserDto: CreateUserDto) {
    const parentId = req.user.userId;
    return this.userService.createChild(parentId, createUserDto);
  }

  // Удаление ребенка
  @Post('children/:childId/remove')
  @Roles(UserRole.PARENT)
  async removeChild(@Req() req, @Param('childId') childId: string) {
    const parentId = req.user.userId;
    return this.userService.removeChild(parentId, childId);
  }

  // Генерация кода приглашения
  @Post('invitations/generate')
  @Roles(UserRole.PARENT)
  async generateInvitation(@Req() req) {
    const parentId = req.user.userId;
    const invitation = await this.userService.createInvitationCode(parentId);
    return invitation;
  }

  // Временный endpoint для тестирования без авторизации
  @Post('invitations/generate-test')
  async generateInvitationTest() {
    console.log('Test endpoint called');
    return { code: 'test123' };
  }

  // Временный endpoint для тестирования JWT middleware
  @Post('invitations/generate-debug')
  @Roles(UserRole.PARENT)
  async generateInvitationDebug(@Req() req) {
    console.log('Debug endpoint called');
    console.log('Request user:', req.user);
    return { 
      message: 'Debug endpoint called',
      user: req.user,
      code: 'debug123'
    };
  }

  // Временный endpoint для тестирования без авторизации
  @Post('invitations/generate-no-auth')
  async generateInvitationNoAuth() {
    console.log('No auth endpoint called');
    return { code: 'noauth123' };
  }

  // Временный endpoint для тестирования без декораторов
  @Post('invitations/generate-no-decorators')
  async generateInvitationNoDecorators() {
    console.log('No decorators endpoint called');
    return { code: 'nodec123' };
  }

  // Временный endpoint для тестирования только с JWT guard
  @Post('invitations/generate-jwt-only')
  @UseGuards(JwtAuthGuard)
  async generateInvitationJwtOnly(@Req() req) {
    console.log('JWT only endpoint called');
    console.log('Request user:', req.user);
    return { 
      message: 'JWT only endpoint called',
      user: req.user,
      code: 'jwt123'
    };
  }

  // Временный endpoint для тестирования только с Roles guard
  @Post('invitations/generate-roles-only')
  @UseGuards(RolesGuard)
  @Roles(UserRole.PARENT)
  async generateInvitationRolesOnly(@Req() req) {
    console.log('Roles only endpoint called');
    console.log('Request user:', req.user);
    return { 
      message: 'Roles only endpoint called',
      user: req.user,
      code: 'roles123'
    };
  }

  // Временный endpoint для тестирования с обоими guards, но без @Roles
  @Post('invitations/generate-both-guards')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async generateInvitationBothGuards(@Req() req) {
    console.log('Both guards endpoint called');
    console.log('Request user:', req.user);
    return { 
      message: 'Both guards endpoint called',
      user: req.user,
      code: 'both123'
    };
  }

  // Временный endpoint для тестирования с JWT guard и @Roles
  @Post('invitations/generate-jwt-roles')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PARENT)
  async generateInvitationJwtRoles(@Req() req) {
    console.log('JWT + Roles endpoint called');
    console.log('Request user:', req.user);
    return { 
      message: 'JWT + Roles endpoint called',
      user: req.user,
      code: 'jwtroles123'
    };
  }
}