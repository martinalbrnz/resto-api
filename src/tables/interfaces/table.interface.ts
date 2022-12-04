import { Status } from 'src/constants/TableStatus'

export interface Table {
  num: number
  commands: string[]
  status: Status
  sector: number
}
