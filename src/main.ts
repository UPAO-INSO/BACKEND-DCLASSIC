import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Logger,
  RequestMethod,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { envs } from './config/envs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthGuard } from './auth/guards/auth.guard';

async function bootstrap(): Promise<void> {
  const logger: Logger = new Logger("D'Classic");

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.setGlobalPrefix('api', {
    exclude: [
      {
        path: '',
        method: RequestMethod.GET,
      },
    ],
  });

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle("D'Classic API")
    .setDescription("The D'Classic Restaurant API description")
    .setVersion('1.0')
    .addTag('dclassic')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory());

  await app.listen(envs.port);

  logger.log(`App running on port ${envs.port}`);
}
bootstrap();
