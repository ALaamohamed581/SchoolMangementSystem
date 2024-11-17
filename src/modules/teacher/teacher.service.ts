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

  async findAll(queryString: string) {
    const queryBuilder = await this.TeacherRepo.createQueryBuilder('teacher')
      .where([queryString])
      .take(5)
      .getMany();

    return queryBuilder;
  }

  async findOne(queryString: string) {
    const queryBuilder = await this.TeacherRepo.createQueryBuilder('teacher')
      .where([queryString])

      .getOne();
    return queryBuilder;
  }
  async findOneWithStudents(id: number) {
    const queryBuilder = await this.TeacherRepo.createQueryBuilder('teacher')
      .andWhere('teacher.id = :id', { id })
      .getOne();

    return queryBuilder;
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    let up = await this.TeacherRepo.createQueryBuilder()
      .update('teacher')
      .set(updateTeacherDto)
      .where('teacher.id = :id', { id })
      .execute();

    return up;
  }
}
