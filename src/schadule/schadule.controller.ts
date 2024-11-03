import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchaduleService } from './schadule.service';
import { CreateSchaduleDto } from './dto/create-schadule.dto';
import { UpdateSchaduleDto } from './dto/update-schadule.dto';

@Controller('schadule')
export class SchaduleController {
  constructor(private readonly schaduleService: SchaduleService) {}

  @Post()
  create(@Body() createSchaduleDto: CreateSchaduleDto) {
    return this.schaduleService.create(createSchaduleDto);
  }

  @Get()
  findAll() {
    return this.schaduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schaduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchaduleDto: UpdateSchaduleDto) {
    return this.schaduleService.update(+id, updateSchaduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schaduleService.remove(+id);
  }
}
