import {
  IsString,
  IsEmail,
  IsDate,
  IsOptional,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Exam } from 'src/entites/exam.entity';
import { Teacher } from 'src/entites/teacher.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsDate()
  @Type(() => Date)
  @ApiProperty()
  DOB: Date;

  @IsString()
  @ApiProperty()
  grade: string;

  @IsOptional()
  @IsArray()
  @Type(() => Teacher)
  @ApiProperty()
  Teacher?: Teacher[];

  @IsOptional()
  @IsArray()
  @Type(() => Exam)
  @ApiProperty()
  exams?: Exam[];
}
