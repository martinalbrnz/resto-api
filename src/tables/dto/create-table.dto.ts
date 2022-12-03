import { Status } from 'src/constants/TableStatus'

export class CreateTableDto {
  num: number
  commands: string[] | []
  status: Status
  sector: number
}
