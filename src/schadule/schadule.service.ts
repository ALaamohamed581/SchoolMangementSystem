import { Injectable } from '@nestjs/common';
import { CreateSchaduleDto } from './dto/create-schadule.dto';
import { UpdateSchaduleDto } from './dto/update-schadule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schadule } from 'src/entites/schadule.enitity';

@Injectable()
export class SchaduleService {
  constructor(
    @InjectRepository(Schadule) private schaduleRepo: Repository<Schadule>,
  ) {}
  async create(createSchaduleDto: CreateSchaduleDto) {
    let schadule = this.schaduleRepo.create(createSchaduleDto);
    return await this.schaduleRepo.save(schadule);
  }

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
