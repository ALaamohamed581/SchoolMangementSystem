import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from 'src/entites/exam.entity';

@Injectable()
export class ExamService {
  constructor(@InjectRepository(Exam) private examRepo: Repository<Exam>) {}
  async create(createExamDto: CreateExamDto) {
    const exam = this.examRepo.create(createExamDto);
    await this.examRepo.save(exam);
    return exam;
  }

  async findAll(queryString: string) {
    return await this.examRepo
      .createQueryBuilder('exam')
      .take(10)
      .where([queryString])
      .getMany();
  }

  async findOne(id: number) {
    return await this.examRepo
      .createQueryBuilder('exam')
      .where('exam.id =  :id', { id })
      .getOne();
  }

  async update(id: number, updateExamDto: UpdateExamDto) {
    return await this.examRepo.update(id, updateExamDto);
  }

  async remove(id: number) {
    return await this.examRepo
      .createQueryBuilder('exam')
      .delete()
      .from('exam')
      .where('exam.id = :id', { id })
      .execute();
  }
}
