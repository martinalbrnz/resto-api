import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common'
import { AccountsService } from './accounts.service'
import { CreateAccountDto } from './dto/create-account.dto'
import { IndexAccountDto } from './dto/index-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) { }

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto)
  }

  @Get()
  findIndex(@Query() query: IndexAccountDto) {
    try {
      return this.accountsService.findIndexed(query.index, query.size)
    } catch (error) {
      return error
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const account = await this.accountsService.findOne(id)
      if (!account) {
        throw new BadRequestException(NotFoundException)
      }
      return account
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Element not found',
      }, HttpStatus.NOT_FOUND)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    try {
      const account = await this.accountsService.update(id, updateAccountDto)
      if (!account) {
        throw new BadRequestException(NotFoundException)
      }
      return account
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Element not found',
      }, HttpStatus.NOT_FOUND)
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    try {
      const account = await this.accountsService.remove(id)
      if (!account) {
        throw new BadRequestException(NotFoundException)
      }
      return account
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Element not found',
      }, HttpStatus.NOT_FOUND)
    }
  }
}
