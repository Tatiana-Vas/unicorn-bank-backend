import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Invitation Generation E2E', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /api/parents/invitations/generate', () => {
    it('should generate invitation code with valid token', async () => {
      // Сначала нужно залогиниться и получить токен
      const loginResponse = await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'test1@example.com',
          password: 'pass',
        })
        .expect(200);

      const { accessToken } = loginResponse.body;

      console.log('Login successful, token:', accessToken.substring(0, 20) + '...');

      const response = await request(app.getHttpServer())
        .post('/api/parents/invitations/generate')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(201);

      console.log('Invitation response:', response.body);

      expect(response.body).toHaveProperty('code');
      expect(response.body.code).toHaveLength(6);
    });

    it('should return 403 without valid token', async () => {
      await request(app.getHttpServer())
        .post('/api/parents/invitations/generate')
        .expect(403);
    });

    it('should return 401 with invalid token', async () => {
      await request(app.getHttpServer())
        .post('/api/parents/invitations/generate')
        .set('Authorization', 'Bearer invalid-token')
        .expect(401);
    });
  });
});