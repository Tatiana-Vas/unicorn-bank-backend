import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto, GetChildrenDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../auth/enums/user-role.enum';

@Controller('api/users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('parent')
  @Roles(UserRole.PARENT)
  async createParent(@Body() createUserDto: CreateUserDto) {
    return this.userService.createParent(createUserDto);
  }

  @Post('child')
  @Roles(UserRole.PARENT)
  async createChild(@Body() createUserDto: CreateUserDto) {
    // В реальной реализации parentId должен приходить из JWT токена
    const parentId = 'temp-parent-id'; // Заглушка
    return this.userService.createChild(parentId, createUserDto);
  }

  @Get('me')
  async getProfile() {
    // В реальной реализации userId должен приходить из JWT токена
    const userId = 'temp-user-id'; // Заглушка
    return this.userService.findById(userId);
  }

  @Get('children')
  @Roles(UserRole.PARENT)
  async getChildren(@Body() getChildrenDto: GetChildrenDto) {
    return this.userService.getChildrenByParentId(getChildrenDto.parentId);
  }


  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
