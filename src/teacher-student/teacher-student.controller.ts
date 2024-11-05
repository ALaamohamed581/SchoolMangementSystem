import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeacherStudentService } from './teacher-student.service';
import { CreateTeacherStudentDto } from './dto/create-teacher-student.dto';
import { UpdateTeacherStudentDto } from './dto/update-teacher-student.dto';

@Controller('teacher-student')
export class TeacherStudentController {
  constructor(private readonly teacherStudentService: TeacherStudentService) {}

  @Post(':sttId/:teacherId')
  create(
    @Param('sttId') stdId: number,
    @Param('teacherId') teachherId: number,
  ) {
    return this.teacherStudentService.asign(stdId, teachherId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeacherStudentDto: UpdateTeacherStudentDto,
  ) {
    return this.teacherStudentService.update(+id, updateTeacherStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherStudentService.remove(+id);
  }
}
