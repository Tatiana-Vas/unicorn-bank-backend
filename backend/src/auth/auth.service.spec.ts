import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../common/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;
  let jwt: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            parent: {
              findUnique: jest.fn(),
              create: jest.fn(),
            },
            child: {
              findMany: jest.fn(),
              create: jest.fn(),
            },
            invitationCode: {
              findUnique: jest.fn(),
              update: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
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

  describe('register', () => {
    it('should register a new parent', async () => {
      const registerDto = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      };

      jest.spyOn(prisma.parent, 'findUnique').mockResolvedValue(null);
      jest.spyOn(prisma.parent, 'create').mockResolvedValue({
        id: '1',
        email: registerDto.email,
        name: registerDto.name,
        password: 'hashedPassword',
      });
      jest.spyOn(jwt, 'sign').mockReturnValue('mockToken');

      const result = await service.register(registerDto);

      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
    });
  });

  describe('login', () => {
    it('should login a parent', async () => {
      const loginDto = {
        email: 'test@example.com',
        password: 'password123',
      };

      const mockUser = {
        id: '1',
        email: loginDto.email,
        name: 'Test User',
        password: await bcrypt.hash(loginDto.password, 12),
      };

      jest.spyOn(prisma.parent, 'findUnique').mockResolvedValue(mockUser);
      jest.spyOn(jwt, 'sign').mockReturnValue('mockToken');

      const result = await service.login(loginDto);

      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
    });
  });
});