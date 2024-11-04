import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from 'src/entites/exam.entity';
import { Subject } from 'src/entites/Subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject) private subjectRepo: Repository<Subject>,
    @InjectRepository(Exam) private examRepo: Repository<Exam>,
  ) {}
  async create(createSubjectDto: CreateSubjectDto) {
    let subject = this.subjectRepo.create(createSubjectDto);
    return await this.subjectRepo.save(subject);
  }

  async findAll() {
    return await this.subjectRepo.find();
  }

  async findOne(id: number) {
    return await this.subjectRepo.findOne({ where: { id } });
  }

  async AssignSubjectExam(subjectId: number, exammId: number) {
    // let up = await this.subjectRepo
    //   .createQueryBuilder('subject')
    //   .where('subject.id', { id })
    //   .getOne();
    // let exam = this.examRepo.create({ TimeDate: date, subjects: up });
  }

  async update(id: number, data: any) {
    return await this.subjectRepo.update(id, data);
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}
