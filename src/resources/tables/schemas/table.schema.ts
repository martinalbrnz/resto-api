import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Status } from 'src/constants/TableStatus'

export type TableDocument = HydratedDocument<Table>

@Schema()
export class Table {
  @Prop({ required: true })
    num: number

  @Prop({ required: false })
    command: string[] | []

  @Prop({ default: 0 })
    status: Status

  @Prop({ required: true, default: 0 })
    sector: 0
}

export const TableSchema = SchemaFactory.createForClass(Table)
