import { PartialType } from '@nestjs/mapped-types'
import { CreateTableDto } from './create-table.dto'
import { ObjectId } from 'mongoose'
import { Status } from 'src/constants/TableStatus'

export class UpdateTableDto extends PartialType(CreateTableDto) {
  num: number
  commands: ObjectId[]
  status: Status
  sector: number
}
