import { IsString, IsEmail, IsInt, IsOptional, IsArray } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import { Student } from 'src/entites/student.entity';
import { Subject } from 'src/entites/Subject.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeacherDto {
  @IsString()
  @ApiProperty({ description: 'the name of the teacer', example: 'alaa' })
  name: string;

  @IsEmail()
  @ApiProperty({ example: 'example@test.com' })
  email: string;

  @IsString()
  @Exclude()
  @ApiProperty({ example: 'A12345z' })
  password: string;

  @IsString()
  @ApiProperty({ example: 'Geology' })
  specialization: string;

  @IsInt()
  @ApiProperty({ example: 0 })
  sickLeaves: number;

  @IsOptional()
  @IsArray()
  @Type(() => Student)
  @ApiProperty({ required: false })
  students?: Student[];

  @IsOptional()
  @Type(() => Subject)
  @ApiProperty({ required: false })
  Subject?: Subject;
}
