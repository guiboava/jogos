import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3005);

  const config = new DocumentBuilder()
    .setTitle('Games API')
    .setDescription('CRUD de games')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.create.createDocument
  SwaggerModule.setup('api', app, document);
}
bootstrap();
