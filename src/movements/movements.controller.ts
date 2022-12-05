import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common'
import { CreateMovementDto } from './dto/create-movement.dto'
import { IndexMovementDto } from './dto/index-movement.dto'
import { UpdateMovementDto } from './dto/update-movement.dto'
import { MovementsService } from './movements.service'

@Controller('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService) { }

  @Post()
  create(@Body() createMovementDto: CreateMovementDto) {
    return this.movementsService.create(createMovementDto)
  }

  @Get()
  async findIndex(@Query() query: IndexMovementDto) {
    try {
      const movement = await this.movementsService.findIndexed(query.index, query.size)
      if (!movement) {
        throw new BadRequestException(NotFoundException)
      }
      return movement
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Element not found',
      }, HttpStatus.NOT_FOUND)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const movement = await this.movementsService.findOne(id)
      if (!movement) {
        throw new BadRequestException(NotFoundException)
      }
      return movement
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Element not found',
      }, HttpStatus.NOT_FOUND)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMovementDto: UpdateMovementDto) {
    try {
      const movement = await this.movementsService.update(id, updateMovementDto)
      if (!movement) {
        throw new BadRequestException(NotFoundException)
      }
      return movement
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Element not found',
      }, HttpStatus.NOT_FOUND)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const movement = await this.movementsService.remove(id)
      if (!movement) {
        throw new BadRequestException(NotFoundException)
      }
      return movement
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Element not found',
      }, HttpStatus.NOT_FOUND)
    }
  }
}
