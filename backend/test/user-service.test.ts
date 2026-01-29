import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../src/user/user.service';
import { PrismaService } from '../src/common/prisma/prisma.service';

describe('UserService - Invitation Generation', () => {
  let userService: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            invitationCode: {
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('createInvitationCode', () => {
    it('should generate invitation code', async () => {
      const parentId = 'test-parent-id';
      const mockCode = 'abc123';
      
      // Mock Prisma
      prisma.invitationCode.create = jest.fn().mockResolvedValue({
        id: 'test-id',
        code: mockCode,
        parentId,
        expiresAt: new Date(),
        usedAt: null,
      });

      const result = await userService.createInvitationCode(parentId);
      
      expect(result).toEqual({ code: mockCode });
      expect(prisma.invitationCode.create).toHaveBeenCalledWith({
        data: {
          code: mockCode,
          parentId,
          expiresAt: expect.any(Date),
        },
      });
    });

    it('should generate unique codes', async () => {
      const parentId = 'test-parent-id';
      
      const result1 = await userService.createInvitationCode(parentId);
      const result2 = await userService.createInvitationCode(parentId);
      
      expect(result1.code).not.toBe(result2.code);
      expect(result1.code).toHaveLength(6);
      expect(result2.code).toHaveLength(6);
    });
  });
});