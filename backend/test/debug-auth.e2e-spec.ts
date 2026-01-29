import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Debug Auth', () => {
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

  it('should login and get user info', async () => {
    // Сначала логинимся
    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'test1@example.com',
        password: 'pass',
      })
      .expect(200);

    const { accessToken, user } = loginResponse.body;

    console.log('Login successful');
    console.log('User ID:', user.id);
    console.log('User email:', user.email);
    console.log('User role: PARENT');

    // Проверим, что токен действителен
    const tokenInfoResponse = await request(app.getHttpServer())
      .get('/api/users/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    console.log('Token validation successful');
    console.log('Token user info:', tokenInfoResponse.body);

    // Теперь попробуем создать приглашение
    const invitationResponse = await request(app.getHttpServer())
      .post('/api/parents/invitations/generate')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(201);

    console.log('Invitation generation successful');
    console.log('Invitation code:', invitationResponse.body.code);
  });
});