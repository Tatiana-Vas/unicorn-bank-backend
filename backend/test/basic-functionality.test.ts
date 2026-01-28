import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture = await TestingModule.create({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });
});