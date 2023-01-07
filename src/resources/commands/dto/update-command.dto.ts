import { PartialType } from '@nestjs/mapped-types'
import { OrdererProduct, State } from 'src/constants/CommandState'
import { CreateCommandDto } from './create-command.dto'

export class UpdateCommandDto extends PartialType(CreateCommandDto) {
  order: OrdererProduct[]
  generalState: State
}
