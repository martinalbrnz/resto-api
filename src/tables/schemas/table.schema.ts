import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types, Schema as MongooseSchema } from 'mongoose'
import { Status } from 'src/constants/TableStatus'

export type TableDocument = HydratedDocument<Table>

@Schema()
export class Table {
  @Prop({ required: true })
    num: number

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'command', required: true })
    command: Types.ObjectId[]

  @Prop({ default: 0 })
    status: Status

  @Prop({ required: true, default: 0 })
    sector: 0
}

export const TableSchema = SchemaFactory.createForClass(Table)
