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

  @Prop({ default: 0 })
    generalState: State
}

export const CommandSchema = SchemaFactory.createForClass(Command)
