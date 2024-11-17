import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/entites/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}
  async create(createstudentDto: any) {
    let student = this.studentRepo.create(createstudentDto);
    return await this.studentRepo.save(student);
  }

  findAll() {
    return this.studentRepo.find();
  }

  findOne(id: number) {
    return this.studentRepo.findOne({ where: { id } });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentRepo.update(id, updateStudentDto);
  }

  // async getGradeSchdule(id: number) {
  //   const GradeSchdule = await this.studentRepo
  //     .createQueryBuilder('student')
  //     .innerJoin(
  //       'student_teacher_teacher',
  //       'student_teacher_teacher',
  //       'student_teacher_teacher.studentId = student.id',
  //     )
  //     .innerJoin(
  //       'teacher',
  //       'teacher',
  //       'teacher.id=student_teacher_teacher.teacherId',
  //     )
  //     .innerJoin('subject', 'subject', 'subject.id = teacher.subjectId')
  //     .innerJoin(
  //       'schadule_subjects_subject',
  //       'schadule_subjects_subject',
  //       'schadule_subjects_subject.subjectId=subjcet.id',
  //     )
  //     .innerJoin(
  //       'schadule',
  //       'schadule',
  //       'schadule.id=schadule_subjects_subject.schaduleId',
  //     )
  //     .getMany();
  //   return GradeSchdule;
  // }
  async getGradeSchedule(id: number) {
    const GradeSchedule = await this.studentRepo
      .createQueryBuilder('student')
      .innerJoinAndSelect(
        'student_teacher_teacher',
        'student_teacher_teacher',
        `student_teacher_teacher.studentId = ${id}`,
      )
      .innerJoin(
        'teacher',
        'teacher',
        'teacher.id = student_teacher_teacher.teacherId',
      )
      .innerJoin('subject', 'subject', 'subject.id = teacher.subjectId')
      .innerJoin(
        'schadule_subjects_subject',
        'schadule_subjects_subject',
        'schadule_subjects_subject.subjectId = subject.id',
      )
      .innerJoinAndSelect(
        'schadule',
        'schadule',
        'schadule.id = schadule_subjects_subject.schaduleId',
      )
      .getMany();
    return GradeSchedule;
  }

  remove(id: number) {
    return this.studentRepo.delete(id);
  }
}
