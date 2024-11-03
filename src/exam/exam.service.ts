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

  findAll() {
    return `This action returns all exam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exam`;
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return `This action updates a #${id} exam`;
  }

  remove(id: number) {
    return `This action removes a #${id} exam`;
  }
}
