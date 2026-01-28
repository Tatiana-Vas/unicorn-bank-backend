import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../common/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { ChildLoginDto } from './dto/child-login.dto';
import { JoinChildDto } from './dto/join-child.dto';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: any;
  let jwt: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            parent: { findUnique: jest.fn(), create: jest.fn() },
            child: { findMany: jest.fn(), create: jest.fn() },
            invitationCode: { findUnique: jest.fn(), update: jest.fn() },
            parentChild: { create: jest.fn() },
            spendingAccount: { create: jest.fn() },
            transaction: { create: jest.fn(), findMany: jest.fn() },
          } as any,
        },
        {
          provide: JwtService,
          useValue: { sign: jest.fn(() => 'mockToken') },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    jwt = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('registerUser', () => {
    it('should register a new parent', async () => {
      const registerDto = { email: 'test@example.com', password: 'password123', name: 'Test User' } as RegisterDto;
      const mockUser = { id: '1', email: registerDto.email, name: registerDto.name };
      (prisma.parent.findUnique as any).mockResolvedValue(null);
      (prisma.parent.create as any).mockResolvedValue(mockUser);
      const result = await service.registerUser(registerDto);
      expect(result).toHaveProperty('accessToken');
    });
  });

  describe('validateUser', () => {
    it('should login a parent', async () => {
      const loginDto = { email: 'test@example.com', password: 'password123' } as any;
      const mockUser = { id: '1', email: loginDto.email, name: 'Test User', password: await bcrypt.hash(loginDto.password, 12) };
      (prisma.parent.findUnique as any).mockResolvedValue(mockUser);
      const result = await service.validateUser(loginDto.email, loginDto.password);
      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('accessToken');
    });

    it('throws on invalid credentials', async () => {
      (prisma.parent.findUnique as any).mockResolvedValue(null);
      await expect(service.validateUser('not@example.com', 'wrong')).rejects.toBeInstanceOf(UnauthorizedException);
    });
  });

  describe('joinChild', () => {
    it('returns token', async () => {
      prisma.invitationCode.findUnique = jest.fn().mockResolvedValue({ code: 'INV', parentId: 'p1', expiresAt: new Date(), usedAt: null });
      (prisma.parentChild as any).create = jest.fn().mockResolvedValue({});
      prisma.child.create = jest.fn().mockResolvedValue({ id: 'c1', name: 'Child' });
      (prisma.spendingAccount as any).create = jest.fn().mockResolvedValue({});
      const res = await service.joinChild('INV', '1234');
      expect(res).toHaveProperty('accessToken');
    });
  });

  describe('childLogin', () => {
    it('returns token', async () => {
      prisma.child.findMany = jest.fn().mockResolvedValue([{ id: 'c1', name: 'Child', password: '$2b$10$hash' }]);
      (require('bcrypt') as any).compare = jest.fn().mockResolvedValue(true);
      const res = await service.childLogin({ pin: '0000' } as any);
      expect(res).toHaveProperty('accessToken');
    });
  });
});
