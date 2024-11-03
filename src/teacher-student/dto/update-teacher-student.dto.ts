import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherStudentDto } from './create-teacher-student.dto';

export class UpdateTeacherStudentDto extends PartialType(CreateTeacherStudentDto) {}
