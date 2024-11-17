import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags()
@UseInterceptors(ClassSerializerInterceptor)
@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @ApiOperation({ summary: 'creats new teacher' })
  @ApiResponse({ status: 201 })
  @Post('signup')
  create(@Body() createTeacherDto: any) {
    return this.teacherService.create(createTeacherDto);
  }
  @ApiOperation({ summary: 'retrives 5 teachers  ' })
  @ApiResponse({ status: 200 })
  @Get()
  findAll(@Query() queryString: string) {
    return this.teacherService.findAll(queryString);
  }
  @ApiOperation({ summary: 'retrives 1 teacher   ' })
  @ApiResponse({ status: 200 })
  @Get('one')
  findOne(@Query() queryString: string) {
    return this.teacherService.findOne(queryString);
  }
  @ApiOperation({ summary: 'updates 1 teacher   ' })
  @ApiResponse({
    status: 201,
    description: 'teacher updated',
    type: CreateTeacherDto,
  })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(id, updateTeacherDto);
  }
}
