import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
   {
    origin: `${process.env.BASE_FRONT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
   }
  );

  await app.listen(process.env.PORT);
}
bootstrap();
