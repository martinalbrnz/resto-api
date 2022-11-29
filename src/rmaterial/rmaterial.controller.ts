import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RmaterialService } from './rmaterial.service';
import { CreateRmaterialDto } from './dto/create-rmaterial.dto';
import { UpdateRmaterialDto } from './dto/update-rmaterial.dto';

@Controller('rmaterial')
export class RmaterialController {
  constructor(private readonly rmaterialService: RmaterialService) {}

  @Post()
  create(@Body() createRmaterialDto: CreateRmaterialDto) {
    return this.rmaterialService.create(createRmaterialDto);
  }

  @Get()
  findAll() {
    return this.rmaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rmaterialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRmaterialDto: UpdateRmaterialDto) {
    return this.rmaterialService.update(+id, updateRmaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rmaterialService.remove(+id);
  }
}
