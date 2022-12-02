import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { OrdererProduct, State } from 'src/constants/CommandState'

export type CommandDocument = HydratedDocument<Command>

@Schema()
export class Command {
  @Prop({required: true})
    table: number

  @Prop({ required: true })
    order: OrdererProduct[]

  @Prop({ required: true, default: 'In Process' })
    status: State
}

export const CommandSchema = SchemaFactory.createForClass(Command)
