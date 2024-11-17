import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { AllExceptionFilter } from './helper/allexceptipons.filters';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  app.setGlobalPrefix('api/v1');

  //this is now enabled for everyone which is not recommended in production

  const config = new DocumentBuilder()
    .setTitle('Shcool mangment Systme')
    .setDescription('this a bancked only nest js')
    .setVersion('1.0')
    .addTag('SMS')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, documentFactory);
  await app.listen(8000);
}
bootstrap();
