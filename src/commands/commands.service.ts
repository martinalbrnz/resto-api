import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateCommandDto } from './dto/create-command.dto'
import { UpdateCommandDto } from './dto/update-command.dto'
import { Command, CommandDocument } from './schemas/command.schema'

@Injectable()
export class CommandsService {
  constructor(@InjectModel(Command.name) private commandModel: Model<CommandDocument>) { }

  findAll(): Promise<Command[]> {
    const allCommands = this.commandModel.find().exec()
    return allCommands
  }

  findOne(id: string) {
    const command = this.commandModel.findById(id).exec()
    return command
  }

  async create(createCommandDto: CreateCommandDto) {
    const createdCommand = new this.commandModel(createCommandDto).save()
    return createdCommand
  }

  update(id: string, updateCommandDto: UpdateCommandDto) {
    const updatedCommand = this.commandModel.findByIdAndUpdate(id, updateCommandDto, { new: true })
    return updatedCommand
  }

  remove(id: string) {
    const deletedCommand = this.commandModel.findByIdAndDelete(id)
    return deletedCommand
  }
}
