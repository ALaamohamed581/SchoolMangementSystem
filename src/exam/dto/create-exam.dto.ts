import { IsDate, IsInt, IsArray, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { Student } from 'src/entites/student.entity';
import { Subject } from 'src/entites/Subject.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExamDto {
  @IsString()
  @Type(() => Date)
  @ApiProperty()
  TimeDate: Date;

  @IsOptional()
  @ApiProperty()
  subjects?: Subject;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  students?: Student[];
}
