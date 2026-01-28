import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthService } from './common/health/health.service';

describe('AppController', () => {
  let appController: AppController;
  let healthService: HealthService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: HealthService,
          useValue: {
            check: jest.fn().mockResolvedValue({}),
            liveness: jest.fn().mockResolvedValue({}),
            readiness: jest.fn().mockResolvedValue({}),
            checkDatabase: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    healthService = app.get<HealthService>(HealthService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('health endpoints', () => {
    it('GET /health should call HealthService.check and return value', async () => {
      const mock = { status: 'ok', timestamp: 't', uptime: 123, details: {} } as any;
      jest.spyOn(healthService, 'check').mockResolvedValue(mock);
      const res = await appController.health();
      expect(res).toBe(mock);
    });

    it('GET /health/database should call HealthService.check and return value', async () => {
      const mock = { status: 'ok', details: {} } as any;
      jest.spyOn(healthService, 'check').mockResolvedValue(mock);
      const res = await appController.databaseHealth();
      expect(res).toBe(mock);
    });
  });
});
