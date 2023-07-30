import { NestFactory } from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common'
import { RootModule } from './root.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.useGlobalPipes(
    new ValidationPipe
  )
  const config = new DocumentBuilder()
    .setTitle('Nest Prisma example')
    .setDescription('this is nestjs example we are build nest with prisma')
    .setVersion('1.0')
    .addTag('Nestprisma')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
