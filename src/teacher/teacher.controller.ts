import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post('signup')
  create(@Body() createTeacherDto: any) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  findAll(@Query() queryString: string) {
    return this.teacherService.findAll(queryString);
  }

  @Get('one')
  findOne(@Query() queryString: string) {
    return this.teacherService.findOne(queryString);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(id, updateTeacherDto);
  }
}
