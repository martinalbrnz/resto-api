import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Delete,
  Res,
  Param,
  Query,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common'
import { RmaterialService } from './rmaterial.service'
import { CreateRmaterialDto } from './dto/create-rmaterial.dto'
// import { UpdateRmaterialDto } from './dto/update-rmaterial.dto'

@Controller('rmaterial')
export class RmaterialController {
  constructor(private readonly rmaterialService: RmaterialService) {}

  @Get('/materials')
  async findAll(@Res() res) {
    const materials = await this.rmaterialService.findAll()
    if (!materials) throw new NotFoundException('Raw Materials list is empty')
    return res.status(HttpStatus.OK).json({
      msg: 'Materials found successfully',
      materials
    })
  }

  @Get('/:id')
  async findOne(@Param('id') id: string, @Res() res) {
    const material = await this.rmaterialService.findOne(id)
    if (!material) throw new NotFoundException('Material does not exist')
    return res.status(HttpStatus.OK).json(material)
  }

  @Post('/create')
  async create(@Res() res, @Body() createRmaterialDto: CreateRmaterialDto) {
    const createdMaterial = await this.rmaterialService.create(createRmaterialDto)
    return res.status(HttpStatus.OK).json({
      msg: 'Material created successfully',
      createdMaterial
    })
  }

  @Put('/update')
  async update(@Res() res, @Body() createdRmaterialDto: CreateRmaterialDto, @Query('id') id:string) {
    const updatedMaterial = await this.rmaterialService.update(id, createdRmaterialDto)
    if (!updatedMaterial) throw new NotFoundException('Material does not exist')
    return res.status(HttpStatus.OK).json({
      msg: 'Material updated successfully',
      updatedMaterial
    })
  }

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id) {
    const deletedMaterial = await this.rmaterialService.remove(id)
    if (!deletedMaterial) throw new NotFoundException('Material does not exist')
    return res.status(HttpStatus.OK).json({
      msg: 'Material deleted successfully',
      deletedMaterial
    })
  }
}
