import { Controller, Get } from '@nestjs/common';
import { HealthService } from './common/health/health.service';

@Controller()
export class AppController {
  constructor(private readonly healthService: HealthService) {}

  @Get('/health')
  async health() {
    return this.healthService.check();
  }

  @Get('/health/live')
  async liveness() {
    return this.healthService.liveness();
  }

  @Get('/health/ready')
  async readiness() {
    return this.healthService.readiness();
  }

  @Get('/health/database')
  async databaseHealth() {
    return this.healthService.check();
  }
}
