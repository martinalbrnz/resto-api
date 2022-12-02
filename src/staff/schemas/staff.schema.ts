/* eslint-disable indent */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type StaffDocument = HydratedDocument<Staff>

@Schema()
export class Staff {

  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  lastName: string

  @Prop({ default: 1 })
  role: number

}

export const StaffSchema = SchemaFactory.createForClass(Staff)
