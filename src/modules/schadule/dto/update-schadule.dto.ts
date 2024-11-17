import { IsDate, IsOptional, IsArray, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { Subject } from 'src/entites/Subject.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSchaduleDto {
  @IsOptional()
  @IsDate()
  @ApiProperty()
  @Type(() => Date)
  date?: Date;

  @IsOptional()
  @IsDate()
  @ApiProperty()
  @Type(() => Date)
  time?: Date;
  @ApiProperty()
  @IsOptional()
  @IsArray()
  subjects?: Subject[];
}
