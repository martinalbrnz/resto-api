import { PartialType } from '@nestjs/mapped-types'
import { CreateTableDto } from './create-table.dto'
import { Status } from 'src/constants/TableStatus'

export class UpdateTableDto extends PartialType(CreateTableDto) {
  status: Status
  sector: number
}
