import { Module } from '@nestjs/common';
import { TeacherStudentService } from './teacher-student.service';
import { TeacherStudentController } from './teacher-student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from 'src/entites/teacher.entity';
import { Student } from 'src/entites/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher, Student])],

  controllers: [TeacherStudentController],
  providers: [TeacherStudentService],
})
export class TeacherStudentModule {}
