import { IsDate, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { Subject } from 'src/entites/Subject.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSchaduleDto {
  @IsDate()
  @Type(() => Date)
  @ApiProperty()
  date: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  @ApiProperty()
  time?: Date;

  @IsArray()
  @ApiProperty({ required: false })
  subjects: Subject[];
}
