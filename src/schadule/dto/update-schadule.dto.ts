import { PartialType } from '@nestjs/mapped-types';
import { CreateSchaduleDto } from './create-schadule.dto';

export class UpdateSchaduleDto extends PartialType(CreateSchaduleDto) {}
