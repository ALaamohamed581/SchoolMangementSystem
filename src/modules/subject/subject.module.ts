import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/entites/Subject.entity';
import { Exam } from 'src/entites/exam.entity';
import { Schadule } from 'src/entites/schadule.enitity';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Exam, Schadule])],

  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
