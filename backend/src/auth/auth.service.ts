import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRole } from './enums/user-role.enum';
import { ChildLoginDto } from './dto/child-login.dto';
import { UnauthorizedException } from '@nestjs/common';
import { AuthResponseDto } from './dto/auth-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<AuthResponseDto> {
    const user = await (this.prismaService as any).parent.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.id, role: UserRole.PARENT };
    // Create a sanitized user object without password
    const { password: userPassword, ...sanitizedUser } = user;
    return new AuthResponseDto({
      accessToken: this.jwtService.sign(payload),
      user: sanitizedUser,
    });
  }

  async registerUser(userData: { email: string; password: string; name: string }): Promise<AuthResponseDto> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await (this.prismaService as any).parent.create({
      data: {
        email: userData.email,
        password: hashedPassword,
        name: userData.name,
      },
    });

    const payload = { email: user.email, sub: user.id, role: UserRole.PARENT };
    // Create a sanitized user object without password
    const { password: userPassword, ...sanitizedUser } = user;
    return new AuthResponseDto({
      accessToken: this.jwtService.sign(payload),
      user: sanitizedUser,
    });
  }

  async registerChild(
    childData: { name: string; password?: string },
    parentId: string,
  ): Promise<AuthResponseDto> {
    const hashedPassword = childData.password ? await bcrypt.hash(childData.password, 10) : '';
    
    const child = await (this.prismaService as any).child.create({
      data: {
        name: childData.name,
        password: hashedPassword,
      },
    });

    // Создаем связь с родителем
    await (this.prismaService as any).parentChild.create({
      data: {
        parentId,
        childId: child.id,
      },
    });

    // Создаем spending account
    await (this.prismaService as any).spendingAccount.create({
      data: {
        childId: child.id,
      },
    });

    const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
    // Create a sanitized user object without password
    const { password: childPassword, ...sanitizedChild } = child;
    return new AuthResponseDto({
      accessToken: this.jwtService.sign(payload),
      user: sanitizedChild,
    });
  }

  async createInvitationCode(parentId: string): Promise<string> {
    const code = Math.random().toString(36).substring(2, 8);
    
    await (this.prismaService as any).invitationCode.create({
      data: {
        code,
        parentId,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 часа
      },
    });

    return code;
  }

  async joinChild(invitationCode: string, pin: string): Promise<AuthResponseDto> {
    // Находим код приглашения
    const invitation = await (this.prismaService as any).invitationCode.findUnique({
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
    const child = await (this.prismaService as any).child.create({
      data: {
        name: `Child_${invitationCode.substring(0, 4)}`,
        pin: await bcrypt.hash(pin, 10),
      },
    });

    // Помечаем код как использованный
    await (this.prismaService as any).invitationCode.update({
      where: { code: invitationCode },
      data: { usedAt: new Date() },
    });

    const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
    // Create a sanitized user object without password
    const { password: childPassword, ...sanitizedChild } = child;
    return new AuthResponseDto({
      accessToken: this.jwtService.sign(payload),
      user: sanitizedChild,
    });
  }

  async childLogin(childLoginDto: ChildLoginDto): Promise<AuthResponseDto> {
    const { pin } = childLoginDto;
    const children = await (this.prismaService as any).child.findMany();
    for (const child of children) {
      // Проверяем PIN, если он установлен
      if (child.pin) {
        const isMatch = await bcrypt.compare(pin, child.pin);
        if (isMatch) {
          const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
          // Create a sanitized user object without password
          const { password: childPassword, ...sanitizedChild } = child;
          return new AuthResponseDto({
            accessToken: this.jwtService.sign(payload),
            user: sanitizedChild,
          });
        }
      }
      // Для совместимости - проверяем password (если PIN не установлен)
      else if (child.password) {
        const isMatch = await bcrypt.compare(pin, child.password);
        if (isMatch) {
          const payload = { name: child.name, sub: child.id, role: UserRole.CHILD };
          // Create a sanitized user object without password
          const { password: childPassword, ...sanitizedChild } = child;
          return new AuthResponseDto({
            accessToken: this.jwtService.sign(payload),
            user: sanitizedChild,
          });
        }
      }
    }
    throw new UnauthorizedException('Invalid PIN');
  }
}
