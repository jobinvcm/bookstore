import {  NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { BookValidationPipe } from './pipe/book-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new BookValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      customErrorMessageEnabled: true,
      customErrorMessage: 'bad request',
    }),
  );

  await app.listen(3000);
}
bootstrap();
