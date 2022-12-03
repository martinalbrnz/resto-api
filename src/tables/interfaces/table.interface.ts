import { ObjectId } from 'mongoose'
import { Status } from 'src/constants/TableStatus'

export interface Table {
  num: number
  commands: ObjectId[]
  status: Status
  sector: number
}
