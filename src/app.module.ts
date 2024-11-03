import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entites/Subject.entity';
import { Schadule } from './entites/schadule.enitity';
import { Student } from './entites/student.entity';
import { Teacher } from './entites/teacher.entity';
import { Exam } from './entites/exam.entity';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { SchaduleModule } from './schadule/schadule.module';
import { SubjectModule } from './subject/subject.module';
import { ExamModule } from './exam/exam.module';
import { TeacherStudentModule } from './teacher-student/teacher-student.module';

@Module({
  imports: [
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
