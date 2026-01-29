import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Simple Invitation Test', () => {
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

  it('should login successfully', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'test1@example.com',
        password: 'pass',
      })
      .expect(200);

    expect(response.body).toHaveProperty('accessToken');
    expect(response.body).toHaveProperty('user');
    expect(response.body.user).not.toHaveProperty('password');
  });

  it('should generate invitation with valid token', async () => {
    // Сначала логинимся
    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'test1@example.com',
        password: 'pass',
      })
      .expect(200);

    const { accessToken } = loginResponse.body;

    // Затем пробуем создать приглашение
    const response = await request(app.getHttpServer())
      .post('/api/parents/invitations/generate')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(201);

    expect(response.body).toHaveProperty('code');
    expect(response.body.code).toHaveLength(6);
  });
});