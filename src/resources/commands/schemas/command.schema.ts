import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Product } from '@resources/products/schemas/product.schema'
import { Staff } from '@resources/staff/schemas/staff.schema'
import mongoose, { HydratedDocument } from 'mongoose'
import { State } from 'src/constants/CommandState'

export type CommandDocument = HydratedDocument<Command>

@Schema({ timestamps: true, })
export class Command {
  @Prop({ required: true })
  table: number

  @Prop({
    type: [{
      _id: false,
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      units: { type: Number },
      state: { type: String, enum: State }
    }]
  })
  order: { product: Product, units: number, state: State }[]

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Staff' })
  waiter: Staff

  @Prop({ default: 0 })
  status: State
}

export const CommandSchema = SchemaFactory.createForClass(Command)
