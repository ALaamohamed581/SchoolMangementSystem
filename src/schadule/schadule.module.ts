import { Module } from '@nestjs/common';
import { SchaduleService } from './schadule.service';
import { SchaduleController } from './schadule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schadule } from 'src/entites/schadule.enitity';
import { Subject } from 'src/entites/Subject.entity';
import { Student } from 'src/entites/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Schadule, Subject, Student])],

  controllers: [SchaduleController],
  providers: [SchaduleService],
})
export class SchaduleModule {}
