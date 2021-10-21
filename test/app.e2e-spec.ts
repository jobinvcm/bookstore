import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { BookValidationPipe } from '../src/pipe/book-validation.pipe';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new BookValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        customErrorMessageEnabled: true,
        customErrorMessage: 'bad request',
      }),
    );
    await app.init();
  });

  it('/book (GET) default', async () => {
    const res = await request(app.getHttpServer())
      .get('/book?sortBy=author&asc=1&search=')
      .send();
    expect(res.status).toBe(200);
  });
  it('/book (GET) error', async () => {
    const res = await request(app.getHttpServer())
      .get('/book?sortBy=timestamp&asc=1&search=')
      .send();
    expect(res.status).toBe(400);
  });
  it('/book (GET) error', async () => {
    const res = await request(app.getHttpServer())
      .get('/book?sortBy=timestamp')
      .send();
    expect(res.status).toBe(400);
  });
  it('/book (post) error', async () => {
    await request(app.getHttpServer())
      .post('/book')
      .send({
        name: 'Goodnight moon',
        author: 'new author 123',
        description: 'new Description 123',
      })
      .expect(400);
  });
});
