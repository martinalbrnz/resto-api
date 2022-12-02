import { Module } from '@nestjs/common'
import { CommandsService } from './commands.service'
import { CommandsController } from './commands.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Command, CommandSchema } from './schemas/command.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Command.name, schema: CommandSchema }])],
  controllers: [CommandsController],
  providers: [CommandsService],
  exports: [MongooseModule.forFeature([{ name: Command.name, schema: CommandSchema }])],

})
export class CommandsModule {}
