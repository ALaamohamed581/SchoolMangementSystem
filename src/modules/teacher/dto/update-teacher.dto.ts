import { IsString, IsEmail, IsInt, IsOptional, IsArray } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Subject } from 'src/entites/Subject.entity';
import { Student } from 'src/entites/student.entity';
export class UpdateTeacherDto {
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
  @Exclude()
  @ApiProperty()
  password?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  specialization?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty()
  sickLeaves?: number;

  @IsOptional()
  @IsArray()
  @Type(() => Student)
  @ApiProperty()
  students?: Student[];

  @IsOptional()
  @Type(() => Subject)
  @ApiProperty()
  Subject?: Subject;
}
