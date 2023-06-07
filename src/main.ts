import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
      origin: "https://accorganized.vercel.app/login"
  })

  const config = new DocumentBuilder()
  .setTitle('Contacts')
  .setDescription('See your Contacts')
  .setVersion('0.0.1')
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('doc', app, document)


  app.useGlobalPipes(
    new ValidationPipe({ whitelist:true }),
    new ValidationPipe({
      transform: true,
      transformOptions: {groups: ['transform']}
    })
  )
  await app.listen(3000);
}
bootstrap();
