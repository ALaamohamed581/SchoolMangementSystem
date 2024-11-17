import { Injectable } from '@nestjs/common';
import { CreateSchaduleDto } from './dto/create-schadule.dto';
import { UpdateSchaduleDto } from './dto/update-schadule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schadule } from 'src/entites/schadule.enitity';
import { Student } from 'src/entites/student.entity';
import { Subject } from 'src/entites/Subject.entity';

@Injectable()
export class SchaduleService {
  constructor(
    @InjectRepository(Schadule) private schaduleRepo: Repository<Schadule>,
    @InjectRepository(Student) private studentRepo: Repository<Student>,
    @InjectRepository(Subject) private SubjectRepo: Repository<Subject>,
  ) {}
  async create(createSchaduleDto: CreateSchaduleDto) {
    let schadule = this.schaduleRepo.create(createSchaduleDto);
    return await this.schaduleRepo.save(schadule);
  }

  async getGradeSchdule(stdId: number) {}
  findAll() {
    return `This action returns all schadule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schadule`;
  }

  update(id: number, updateSchaduleDto: UpdateSchaduleDto) {
    return `This action updates a #${id} schadule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schadule`;
  }
}
