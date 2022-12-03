import { ObjectId } from 'mongoose'
import { Status } from 'src/constants/TableStatus'

export class CreateTableDto {
  num: number
  commands: ObjectId[]
  status: Status
  sector: number
}
