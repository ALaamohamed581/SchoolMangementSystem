import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsArray, IsOptional } from 'class-validator';
import { Exam } from 'src/entites/exam.entity';
import { Schadule } from 'src/entites/schadule.enitity';
import { Teacher } from 'src/entites/teacher.entity';

export class CreateSubjectDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsInt()
  @ApiProperty()
  semister: number;

  @IsString()
  @ApiProperty()
  book: string;

  @IsOptional()
  @IsArray()
  @ApiProperty()
  Teacher?: Teacher[];

  @IsOptional()
  @IsArray()
  @ApiProperty()
  schadules?: Schadule[];

  @IsOptional()
  @IsArray()
  @ApiProperty()
  exams?: Exam[];
}
