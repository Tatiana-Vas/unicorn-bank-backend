import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '../../auth/enums/user-role.enum';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService
  ) {}

  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Access denied. No token provided.');
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    try {
      const decoded = this.jwtService.verify(token);
      const userId = (decoded as any).sub;
      const role = (decoded as any).role;

      let user;
      
      // Проверяем, что пользователь существует в базе данных
      if (role === UserRole.PARENT) {
        user = await (this.prisma as any).parent.findUnique({
          where: { id: userId },
        });
      } else if (role === UserRole.CHILD) {
        user = await (this.prisma as any).child.findUnique({
          where: { id: userId },
        });
      }

      if (!user) {
        throw new UnauthorizedException('Invalid token: user not found.');
      }

      // Устанавливаем пользователя в запрос
      req['user'] = {
        userId: user.id,
        email: user.email || user.name, // child doesn't have email
        role: role as UserRole,
      };

      next();
    } catch (error) {
      throw new UnauthorizedException('Invalid token.');
    }
  }
}
