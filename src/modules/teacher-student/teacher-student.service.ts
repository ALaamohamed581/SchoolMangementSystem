import { Injectable } from '@nestjs/common';
import { CreateTeacherStudentDto } from './dto/create-teacher-student.dto';
import { UpdateTeacherStudentDto } from './dto/update-teacher-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/entites/teacher.entity';
import { Repository } from 'typeorm';
import { Student } from 'src/entites/student.entity';

@Injectable()
export class TeacherStudentService {
  constructor(
    @InjectRepository(Teacher) private teacherRepo: Repository<Teacher>,
    @InjectRepository(Student) private studnetRepo: Repository<Student>,
  ) {}
  async asign(stdId: number, teacherId: number) {
    const student = await this.studnetRepo.findOne({
      where: { id: stdId },
      relations: ['Teacher'],
    });
    const teacher = await this.teacherRepo.findOne({
      where: { id: teacherId },
    });
    student.Teacher.push(teacher);
    await this.studnetRepo.save(student);

    return { teacher };
  }

  update(id: number, updateTeacherStudentDto: UpdateTeacherStudentDto) {
    return `This action updates a #${id} teacherStudent`;
  }
}
