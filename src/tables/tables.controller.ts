import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common'
import { TablesService } from './tables.service'
import { CreateTableDto } from './dto/create-table.dto'
import { UpdateTableDto } from './dto/update-table.dto'

@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}
  
  @Get()
  findAll() {
    return this.tablesService.findAll()
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tablesService.findOne(id)
  }

  @Post()
  create(@Body() createTableDto: CreateTableDto) {
    return this.tablesService.create(createTableDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
    return this.tablesService.update(id, updateTableDto)
  }

  @Patch('/clear/:id')
  remove(@Param('id') id: string) {
    return this.tablesService.remove(id)
  }
}
