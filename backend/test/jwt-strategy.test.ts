import { Test, TestingModule } from '@nestjs/testing';
import { JwtStrategy } from '../src/auth/strategies/jwt.strategy';
import { PrismaService } from '../src/common/prisma/prisma.service';
import { UnauthorizedException } from '@nestjs/common';

describe('JwtStrategy', () => {
  let jwtStrategy: JwtStrategy;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JwtStrategy,
        {
          provide: PrismaService,
          useValue: {
            parent: {
              findUnique: jest.fn(),
            },
            child: {
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    jwtStrategy = module.get<JwtStrategy>(JwtStrategy);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('validate', () => {
    it('should return user data for valid parent token', async () => {
      const payload = {
        sub: 'test-parent-id',
        role: 'PARENT',
        email: 'test@example.com',
      };

      const mockUser = {
        id: 'test-parent-id',
        email: 'test@example.com',
        name: 'Test Parent',
      };

      prisma.parent.findUnique = jest.fn().mockResolvedValue(mockUser);

      const result = await jwtStrategy.validate(payload);

      expect(result).toEqual({
        userId: 'test-parent-id',
        email: 'test@example.com',
        name: 'Test Parent',
        role: 'PARENT',
      });
      expect(prisma.parent.findUnique).toHaveBeenCalledWith({
        where: { id: 'test-parent-id' },
      });
    });

    it('should throw UnauthorizedException for non-existent parent', async () => {
      const payload = {
        sub: 'non-existent-id',
        role: 'PARENT',
      };

      prisma.parent.findUnique = jest.fn().mockResolvedValue(null);

      await expect(jwtStrategy.validate(payload)).rejects.toThrow(UnauthorizedException);
    });

    it('should return child data for valid child token', async () => {
      const payload = {
        sub: 'test-child-id',
        role: 'CHILD',
      };

      const mockChild = {
        id: 'test-child-id',
        name: 'Test Child',
      };

      prisma.child.findUnique = jest.fn().mockResolvedValue(mockChild);

      const result = await jwtStrategy.validate(payload);

      expect(result).toEqual({
        userId: 'test-child-id',
        name: 'Test Child',
        role: 'CHILD',
      });
    });

    it('should throw UnauthorizedException for invalid role', async () => {
      const payload = {
        sub: 'test-id',
        role: 'INVALID_ROLE',
      };

      await expect(jwtStrategy.validate(payload)).rejects.toThrow(UnauthorizedException);
    });
  });
});