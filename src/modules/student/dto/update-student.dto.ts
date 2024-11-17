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

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  name?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty()
  email?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  password?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  @ApiProperty()
  DOB?: Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  grade?: string;

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
