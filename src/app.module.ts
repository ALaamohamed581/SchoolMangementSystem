import {
  Logger,
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entites/Subject.entity';
import { Schadule } from './entites/schadule.enitity';
import { Student } from './entites/student.entity';
import { Teacher } from './entites/teacher.entity';
import { Exam } from './entites/exam.entity';
import { TeacherModule } from './modules/teacher/teacher.module';
import { StudentModule } from './modules/student/student.module';
import { SchaduleModule } from './modules/schadule/schadule.module';
import { SubjectModule } from './modules/subject/subject.module';
import { ExamModule } from './exam/exam.module';
import { TeacherStudentModule } from './modules/teacher-student/teacher-student.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './helper/my-logger/my-logger.module';
import { RequestLooger } from './middelawres/Logger';
import helmet from 'helmet';
import { CorsConfiguration } from './middelawres/CorsConfiguration';
@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 15,
      },
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'sms',
      entities: [Subject, Schadule, Student, Teacher, Exam],
      synchronize: true,
    }),
    TeacherModule,
    StudentModule,
    SchaduleModule,
    SubjectModule,
    ExamModule,
    TeacherStudentModule,
    MyLoggerModule,
  ],
  controllers: [AppController],
  providers: [
    Logger,
    AppService,
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestLooger, /*CorsConfiguration,*/ helmet())
      .forRoutes('*');
  }
}
