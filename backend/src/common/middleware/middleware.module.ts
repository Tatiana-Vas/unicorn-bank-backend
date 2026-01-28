import { Module, Global } from '@nestjs/common';
import { JwtMiddleware } from './jwt.middleware';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [JwtMiddleware],
  exports: [JwtMiddleware],
})
export class MiddlewareModule {}
