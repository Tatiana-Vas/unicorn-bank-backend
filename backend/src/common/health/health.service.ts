import { Injectable } from '@nestjs/common';
import {
  HealthCheckService,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DatabaseHealthIndicator extends HealthIndicator {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    const startTime = Date.now();

    try {
      // Test database connectivity with a simple query and timeout
      // Using Promise.race to implement timeout
      const queryPromise = this.prisma.$queryRaw`SELECT 1 as health_check`;
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Database query timeout')), 5000)
      );

      await Promise.race([queryPromise, timeoutPromise]);

      const responseTime = Date.now() - startTime;

      return super.getStatus(key, true, {
        database: 'connected',
        timestamp: new Date().toISOString(),
        response_time_ms: responseTime,
        status: 'healthy',
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return super.getStatus(key, false, {
        database: 'disconnected',
        timestamp: new Date().toISOString(),
        error: errorMessage,
        status: 'unhealthy',
      });
    }
  }
}

@Injectable()
export class HealthService {
  constructor(
    private readonly health: HealthCheckService,
    private readonly databaseHealthIndicator: DatabaseHealthIndicator,
  ) {}

  async check() {
    return this.health.check([
      async () => this.databaseHealthIndicator.isHealthy('database'),
    ]);
  }

  async liveness() {
    // Liveness probe - basic service availability
    return {
      status: 'ok',
      service: 'unicorn-bank-backend',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }

  async readiness() {
    // Readiness probe - service ready to accept traffic
    return this.check();
  }
}
