import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/entites/teacher.entity';
import { Repository } from 'typeorm';
import { Student } from 'src/entites/student.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private TeacherRepo: Repository<Teacher>,
  ) {}
  async create(createTeacherDto: any) {
    let t = this.TeacherRepo.create(createTeacherDto);
    return await this.TeacherRepo.save(t);
  }

  async findAll() {
    const name = 'alaa@yahh.com';
    const queryBuilder = this.TeacherRepo.createQueryBuilder(
      'teacher',
    ).innerJoinAndSelect('teacher.students', 'student');

    return await queryBuilder.getMany();
  }

  findOne(id: number) {
    return this.TeacherRepo.findOne({ where: { id } });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    let up = await this.TeacherRepo.createQueryBuilder()
      .update('teacher')
      .set(updateTeacherDto)
      .where('teacher.id = :id', { id })
      .execute();

    return up;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
