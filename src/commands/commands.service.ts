import { Injectable } from '@nestjs/common'
import { CreateCommandDto } from './dto/create-command.dto'
import { UpdateCommandDto } from './dto/update-command.dto'

@Injectable()
export class CommandsService {
  findAll() {
    return 'This action returns all commands'
  }

  findOne(id: number) {
    return `This action returns a #${id} command`
  }

  create(createCommandDto: CreateCommandDto) {
    console.log(createCommandDto)
    return 'This action adds a new command'
  }

  update(id: number, updateCommandDto: UpdateCommandDto) {
    return `This action updates a #${updateCommandDto} command`
  }

  remove(id: number) {
    return `This action removes a #${id} command`
  }
}
