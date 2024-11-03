import { Module } from '@nestjs/common';
import { SchaduleService } from './schadule.service';
import { SchaduleController } from './schadule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schadule } from 'src/entites/schadule.enitity';

@Module({
  imports: [TypeOrmModule.forFeature([Schadule])],

  controllers: [SchaduleController],
  providers: [SchaduleService],
})
export class SchaduleModule {}
