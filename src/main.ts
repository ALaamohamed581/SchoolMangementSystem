import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { MyLoggerService } from './helper/my-logger/my-logger.service';
import { AllExceptionFilter } from './helper/allexceptipons.filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const { httpAdapter } = app.get(HttpAdapterHost);
  let logger = app.get(MyLoggerService);
  app.useLogger(logger);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  app.setGlobalPrefix('api/v1');

  //this is now enabled for everyone which is not recommended in production
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  app.use(helmet());

  await app.listen(8000);
}
bootstrap();
