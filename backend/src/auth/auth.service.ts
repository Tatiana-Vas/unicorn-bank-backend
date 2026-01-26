import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../common/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JoinChildDto } from './dto/join-child.dto';
import { ChildLoginDto } from './dto/child-login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, name } = registerDto;

    // Check if user already exists
    const existingUser = await this.prisma.parent.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await this.prisma.parent.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    // Generate tokens
    const tokens = await this.generateTokens(user.id, 'PARENT');

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      ...tokens,
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user
    const user = await this.prisma.parent.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate tokens
    const tokens = await this.generateTokens(user.id, 'PARENT');

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      ...tokens,
    };
  }

  async joinChild(joinChildDto: JoinChildDto) {
    const { invitationCode, pin } = joinChildDto;

    // Find invitation
    const invitation = await this.prisma.invitationCode.findUnique({
      where: { code: invitationCode },
      include: { parent: true },
    });

    if (!invitation) {
      throw new UnauthorizedException('Invalid invitation code');
    }

    if (invitation.usedAt) {
      throw new UnauthorizedException('Invitation code already used');
    }

    // Hash PIN
    const hashedPin = await bcrypt.hash(pin, 12);

    // Create child
    const child = await this.prisma.child.create({
      data: {
        name: `Child of ${invitation.parent.name}`,
        password: hashedPin,
        parents: {
          create: {
            parentId: invitation.parent.id,
          },
        },
      },
    });

    // Mark invitation as used
    await this.prisma.invitationCode.update({
      where: { code: invitationCode },
      data: { usedAt: new Date() },
    });

    // Generate tokens
    const tokens = await this.generateTokens(child.id, 'CHILD');

    return {
      child: {
        id: child.id,
        name: child.name,
      },
      ...tokens,
    };
  }

  async childLogin(childLoginDto: ChildLoginDto) {
    const { pin } = childLoginDto;

    // Find child by PIN (this is a simplified approach)
    // In production, you'd need a way to identify which child is logging in
    const children = await this.prisma.child.findMany();

    for (const child of children) {
      const isPinValid = await bcrypt.compare(pin, child.password);

      if (isPinValid) {
        const tokens = await this.generateTokens(child.id, 'CHILD');

        return {
          child: {
            id: child.id,
            name: child.name,
          },
          ...tokens,
        };
      }
    }

    throw new UnauthorizedException('Invalid PIN');
  }

  async logout(userId: string, role: string) {
    // In a real implementation, you'd blacklist the token
    // For now, we just return success
    return { message: 'Logged out successfully' };
  }

  private async generateTokens(userId: string, role: string) {
    const payload = { userId, role };
    
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}