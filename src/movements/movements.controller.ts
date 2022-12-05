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
import { AccountsService } from 'src/accounts/accounts.service'
import { CreateMovementDto } from './dto/create-movement.dto'
import { IndexMovementDto } from './dto/index-movement.dto'
import { UpdateMovementDto } from './dto/update-movement.dto'
import { MovementsService } from './movements.service'

@Controller('movements')
export class MovementsController {
  constructor(
    private readonly movementsService: MovementsService,
    private readonly accountsService: AccountsService,
  ) { }

  @Post()
  create(@Body() createMovementDto: CreateMovementDto) {
    return this.movementsService.create(createMovementDto)
  }

  @Get()
  async findIndex(@Query() query: IndexMovementDto) {
    try {
      const movements = await this.movementsService.findIndexed(query.index, query.size)
      const max = await this.movementsService.findQuantity()
      if (!movements) {
        throw new BadRequestException(NotFoundException)
      }
      return { movements, max }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Element not found',
      }, HttpStatus.NOT_FOUND)
    }
  }

  @Get('/balance')
  async findBalance() {
    try {
      const balance = await this.movementsService.findBalance()
      const accounts = await this.accountsService.findIndexed(1, 100)
      if (!balance || !accounts) {
        throw new BadRequestException(NotFoundException)
      }

      const data = balance.map((item) => {
        const account = accounts.find((acc) => {
          return acc._id.toString() === item._id.toString()
        })
        return {
          ...item,
          name: account?.name
        }
      })

      return data
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Element not found',
      }, HttpStatus.NOT_FOUND)
    }
  }

  @Get('/total')
  async findTotal() {
    try {
      const total = await this.movementsService.findTotal()
      if (!total) {
        throw new BadRequestException(NotFoundException)
      }
      return total
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
