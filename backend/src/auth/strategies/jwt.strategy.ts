import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'your-secret-key',
    });
  }

  async validate(payload: any) {
    const { userId, role } = payload;

    if (role === 'PARENT') {
      const user = await this.prisma.parent.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new UnauthorizedException();
      }

      return {
        userId: user.id,
        email: user.email,
        name: user.name,
        role: 'PARENT',
      };
    } else if (role === 'CHILD') {
      const child = await this.prisma.child.findUnique({
        where: { id: userId },
      });

      if (!child) {
        throw new UnauthorizedException();
      }

      return {
        userId: child.id,
        name: child.name,
        role: 'CHILD',
      };
    }

    throw new UnauthorizedException();
  }
}