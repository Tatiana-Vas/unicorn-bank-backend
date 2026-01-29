import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto, CreateChildDto } from './dto/user.dto';
import { AuthResponseDto } from '../auth/dto/auth-response.dto';
import * as bcrypt from 'bcrypt';
import { UserRole } from '../auth/enums/user-role.enum';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createParent(createUserDto: CreateUserDto): Promise<AuthResponseDto> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await (this.prisma as any).parent.create({
      data: {
        email: createUserDto.email,
        name: createUserDto.name,
        password: hashedPassword,
      },
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { email: user.email, sub: user.id, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user,
    });
  }

  async createChild(
    parentId: string,
    createChildDto: CreateChildDto,
  ): Promise<AuthResponseDto> {
    const hashedPassword = createChildDto.password ? await bcrypt.hash(createChildDto.password, 10) : '';
    
    const child = await (this.prisma as any).child.create({
      data: {
        name: createChildDto.name,
        password: hashedPassword,
        birthDate: createChildDto.birthDate ? new Date(createChildDto.birthDate) : null,
        city: createChildDto.city,
        locale: createChildDto.locale,
        newsPrompt: createChildDto.newsPrompt,
      },
    });

    // Создаем связь ParentChild
    await (this.prisma as any).parentChild.create({
      data: {
        parentId,
        childId: child.id,
      },
    });

    // Создаем SpendingAccount для ребенка
    await (this.prisma as any).spendingAccount.create({
      data: {
        childId: child.id,
      },
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: child,
    });
  }

  async findByEmail(email: string): Promise<AuthResponseDto | null> {
    const user = await (this.prisma as any).parent.findUnique({
      where: { email },
    });

    if (!user) return null;

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { email: user.email, sub: user.id, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user,
    });
  }

  async findById(id: string): Promise<AuthResponseDto | null> {
    const parent = await (this.prisma as any).parent.findUnique({
      where: { id },
      include: {
        children: {
          include: {
            child: true,
          },
        },
      },
    });
    if (parent) {
      // Создаем JWT токен
      const jwtService = new (require('@nestjs/jwt').JwtService)({
        secret: process.env.JWT_SECRET || 'default-secret',
        signOptions: { expiresIn: '1h' },
      });

      const payload = { email: parent.email, sub: parent.id, role: UserRole.PARENT };
      const accessToken = jwtService.sign(payload);

      return new AuthResponseDto({
        accessToken,
        user: parent,
      });
    }

    const child = await (this.prisma as any).child.findUnique({
      where: { id },
      include: {
        parents: {
          include: {
            parent: true,
          },
        },
      },
    });

    if (child) {
      // Создаем JWT токен
      const jwtService = new (require('@nestjs/jwt').JwtService)({
        secret: process.env.JWT_SECRET || 'default-secret',
        signOptions: { expiresIn: '1h' },
      });

      const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
      const accessToken = jwtService.sign(payload);

      return new AuthResponseDto({
        accessToken,
        user: child,
      });
    }

    return null;
  }

  async updateParent(id: string, updateUserDto: UpdateUserDto): Promise<AuthResponseDto> {
    const user = await (this.prisma as any).parent.update({
      where: { id },
      data: updateUserDto,
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { email: user.email, sub: user.id, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user,
    });
  }

  async updateChild(id: string, updateUserDto: UpdateUserDto): Promise<AuthResponseDto> {
    const child = await (this.prisma as any).child.update({
      where: { id },
      data: {
        ...(updateUserDto.name && { name: updateUserDto.name }),
        ...(updateUserDto.password && { password: updateUserDto.password }),
        ...(updateUserDto.birthDate && { birthDate: new Date(updateUserDto.birthDate) }),
        ...(updateUserDto.city !== undefined && { city: updateUserDto.city }),
        ...(updateUserDto.locale !== undefined && { locale: updateUserDto.locale }),
        ...(updateUserDto.newsPrompt !== undefined && { newsPrompt: updateUserDto.newsPrompt }),
      },
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: child,
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<AuthResponseDto> {
    // Проверяем, является ли пользователь родителем или ребенком
    const parent = await (this.prisma as any).parent.findUnique({ where: { id } });
    if (parent) {
      return this.updateParent(id, updateUserDto);
    }

    const child = await (this.prisma as any).child.findUnique({ where: { id } });
    if (child) {
      return this.updateChild(id, updateUserDto);
    }

    throw new Error('User not found');
  }

  async deleteParent(id: string): Promise<AuthResponseDto> {
    const user = await (this.prisma as any).parent.delete({ where: { id } });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { email: user.email, sub: user.id, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user,
    });
  }

  async deleteChild(id: string): Promise<AuthResponseDto> {
    const child = await (this.prisma as any).child.delete({ where: { id } });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: child,
    });
  }

  async delete(id: string): Promise<AuthResponseDto> {
    const parent = await (this.prisma as any).parent.findUnique({ where: { id } });
    if (parent) {
      return this.deleteParent(id);
    }

    const child = await (this.prisma as any).child.findUnique({ where: { id } });
    if (child) {
      return this.deleteChild(id);
    }

    throw new Error('User not found');
  }

  async getChildrenByParentId(parentId: string): Promise<AuthResponseDto[]> {
    const parentChildren = await (this.prisma as any).parentChild.findMany({
      where: { parentId },
      include: {
        child: true,
      },
    });

    return Promise.all(parentChildren.map(async (pc: any) => {
      // Создаем JWT токен для каждого ребенка
      const jwtService = new (require('@nestjs/jwt').JwtService)({
        secret: process.env.JWT_SECRET || 'default-secret',
        signOptions: { expiresIn: '1h' },
      });

      const payload = { name: pc.child.name, sub: pc.child.id, role: UserRole.CHILD };
      const accessToken = jwtService.sign(payload);

      return new AuthResponseDto({
        accessToken,
        user: pc.child,
      });
    }));
  }

  async getParentsByChildId(childId: string): Promise<AuthResponseDto[]> {
    const childParents = await (this.prisma as any).parentChild.findMany({
      where: { childId },
      include: {
        parent: true,
      },
    });

    return Promise.all(childParents.map(async (cp: any) => {
      // Создаем JWT токен для каждого родителя
      const jwtService = new (require('@nestjs/jwt').JwtService)({
        secret: process.env.JWT_SECRET || 'default-secret',
        signOptions: { expiresIn: '1h' },
      });

      const payload = { email: cp.parent.email, sub: cp.parent.id, role: UserRole.PARENT };
      const accessToken = jwtService.sign(payload);

      return new AuthResponseDto({
        accessToken,
        user: cp.parent,
      });
    }));
  }
  
  // getParentByChildId removed for now; use getParentsByChildId in future

  async getChildByName(name: string): Promise<AuthResponseDto | null> {
    const child = await (this.prisma as any).child.findFirst({
      where: { name },
    });

    if (!child) return null;

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: child,
    });
  }

  async createInvitationCode(parentId: string): Promise<{ code: string }> {
    const code = Math.random().toString(36).substring(2, 8);
    
    await (this.prisma as any).invitationCode.create({
      data: {
        code,
        parentId,
      },
    });

    return { code };
  }

  async joinChildByInvitationCode(invitationCode: string, pin: string): Promise<AuthResponseDto> {
    // Находим код приглашения
    const invitation = await (this.prisma as any).invitationCode.findUnique({
      where: { code: invitationCode },
    });

    if (!invitation) {
      throw new Error('Invalid invitation code');
    }

    if (invitation.usedAt) {
      throw new Error('Invitation code already used');
    }

    if (new Date() > new Date(invitation.expiresAt)) {
      throw new Error('Invitation code expired');
    }

    // Создаем ребенка с PIN
    const child = await (this.prisma as any).child.create({
      data: {
        name: `Child_${invitationCode.substring(0, 4)}`,
        pin: await bcrypt.hash(pin, 10),
      },
    });

    // Создаем связь с родителем
    await (this.prisma as any).parentChild.create({
      data: {
        parentId: invitation.parentId,
        childId: child.id,
      },
    });

    // Создаем spending account
    await (this.prisma as any).spendingAccount.create({
      data: {
        childId: child.id,
      },
    });

    // Помечаем код как использованный
    await (this.prisma as any).invitationCode.update({
      where: { code: invitationCode },
      data: { usedAt: new Date() },
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: child,
    });
  }

  async removeChild(parentId: string, childId: string): Promise<AuthResponseDto> {
    // Проверяем, что родитель имеет доступ к ребенку
    const parentChild = await (this.prisma as any).parentChild.findUnique({
      where: {
        parentId_childId: {
          parentId,
          childId,
        },
      },
    });

    if (!parentChild) {
      throw new Error('Parent does not have access to this child');
    }

    // Удаляем связь ParentChild
    await (this.prisma as any).parentChild.delete({
      where: {
        parentId_childId: {
          parentId,
          childId,
        },
      },
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { parentId, childId, sub: parentId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: { message: 'Child removed successfully', parentId, childId },
    });
  }

  async setChildPin(childId: string, pin: string): Promise<AuthResponseDto> {
    const hashedPin = await bcrypt.hash(pin, 10);
    const child = await (this.prisma as any).child.update({
      where: { id: childId },
      data: { pin: hashedPin },
    });

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: { message: 'PIN set successfully', childId },
    });
  }

  async checkParentAccess(parentId: string, childId: string): Promise<AuthResponseDto> {
    const parentChild = await (this.prisma as any).parentChild.findUnique({
      where: {
        parentId_childId: {
          parentId,
          childId,
        },
      },
    });

    const hasAccess = !!parentChild;

    // Создаем JWT токен
    const jwtService = new (require('@nestjs/jwt').JwtService)({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    });

    const payload = { hasAccess, sub: parentId, role: UserRole.PARENT };
    const accessToken = jwtService.sign(payload);

    return new AuthResponseDto({
      accessToken,
      user: { hasAccess, parentId, childId },
    });
  }

  async getChildInfoWithAccessCheck(userId: string, userRole: string, childId: string): Promise<AuthResponseDto> {
    // Если запрос от ребенка - проверяем, что это его данные
    if (userRole === UserRole.CHILD && userId !== childId) {
      throw new Error('Access denied');
    }

    // Если запрос от родителя - проверяем доступ
    if (userRole === UserRole.PARENT) {
      const hasAccess = await this.checkParentAccess(userId, childId);
      if (!hasAccess) {
        throw new Error('Parent does not have access to this child');
      }
    }

    return this.findById(childId);
  }
}
