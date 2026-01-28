import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../src/auth/auth.service';
import { PrismaService } from '../src/common/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { UserRole } from '../src/auth/enums/user-role.enum';
import { RegisterDto } from '../src/auth/dto/register.dto';
import { ChildLoginDto } from '../src/auth/dto/child-login.dto';
import { JoinChildDto } from '../src/auth/dto/join-child.dto';

describe('AuthService (unit)', () => {
  let service: AuthService;
  let prisma: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            parent: { findUnique: jest.fn(), create: jest.fn() },
            child: { create: jest.fn(), findMany: jest.fn() },
            invitationCode: { findUnique: jest.fn(), create: jest.fn(), update: jest.fn() },
            spendingAccount: { create: jest.fn(), findFirst: jest.fn() },
            transaction: { create: jest.fn(), findMany: jest.fn() },
            parentChild: { create: jest.fn() },
          } as any,
        },
        {
          provide: JwtService,
          useValue: { sign: jest.fn((payload) => `jwt-${payload.sub}`) },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = (service as any).prismaService;
  });

  it('registerUser returns accessToken', async () => {
    prisma.parent.create = jest.fn().mockResolvedValue({ id: 'u1', email: 'a@b.c', name: 'A' });
    const res = await service.registerUser({ email: 'a@b.c', password: 'pwd', name: 'A' });
    expect(res).toHaveProperty('accessToken');
  });

  it('validateUser throws on invalid', async () => {
    prisma.parent.findUnique = jest.fn().mockResolvedValue(null);
    await expect(service.validateUser('x@y.z', 'pwd')).rejects.toBeInstanceOf(UnauthorizedException);
  });

  it('joinChild returns token', async () => {
    prisma.invitationCode.findUnique = jest.fn().mockResolvedValue({ code: 'INV', parentId: 'p1', expiresAt: new Date(), usedAt: null });
    prisma.child.create = jest.fn().mockResolvedValue({ id: 'c1', name: 'Child' });
    prisma.parentChild.create = jest.fn().mockResolvedValue({});
    prisma.spendingAccount.create = jest.fn().mockResolvedValue({});
    const res = await service.joinChild('INV', '1234');
    expect(res).toHaveProperty('accessToken');
  });

  it('childLogin returns token', async () => {
    prisma.child.findMany = jest.fn().mockResolvedValue([{ id: 'c1', name: 'Child', password: '$2b$10$hash' }]);
    jest.spyOn(require('bcrypt'), 'compare').mockResolvedValue(true);
    const res = await service.childLogin({ pin: '0000' } as any);
    expect(res).toHaveProperty('accessToken');
  });
});
