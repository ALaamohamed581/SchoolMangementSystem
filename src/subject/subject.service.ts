import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from 'src/entites/exam.entity';
import { Subject } from 'src/entites/Subject.entity';
import { Schadule } from 'src/entites/schadule.enitity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject) private subjectRepo: Repository<Subject>,
    @InjectRepository(Exam) private examRepo: Repository<Exam>,
    @InjectRepository(Schadule) private shdauleRepo: Repository<Schadule>,
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
    let subject = await this.subjectRepo.findOne({
      where: { id: subjectId },
      relations: ['exams'],
    });
    let exam = await this.examRepo.findOne({ where: { id: exammId } });

    subject.exams.push(exam);
    await this.subjectRepo.save(subject);
    return subject;
  }

  async update(id: number, data: any) {
    return await this.subjectRepo.update(id, data);
  }
  async createSchduleDate(subjectId: number, date: any) {
    let schadule: any = this.shdauleRepo.create(date);
    await this.shdauleRepo.save(schadule);

    let subject = await this.subjectRepo.findOne({
      where: { id: subjectId },
      relations: ['schadules'],
    });
    subject.schadules.push(schadule);
    await this.subjectRepo.save(subject);

    return subject;
  }
  async remove(id: number) {
    return await this.subjectRepo
      .createQueryBuilder('subject')
      .delete()
      .from('subject')
      .where('subject.id = :id', { id })
      .execute();
  }
}
