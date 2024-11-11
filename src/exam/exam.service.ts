import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from './exam.entity';

@Injectable()
export class ExamService {
  constructor(@InjectRepository(Exam) private examRepo: Repository<Exam>) {}
  async create(createExamDto: CreateExamDto): Promise<Exam> {
    const exam: Exam = this.examRepo.create(createExamDto);
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
    return await this.examRepo.findOne({ where: { id } });
  }

  async update(id: number, updateExamDto: any) {
    if (!this.examRepo.findOne({ where: { id } })) {
      throw new NotFoundException('this email is either deleted of not found');
    }
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
