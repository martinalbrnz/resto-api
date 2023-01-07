import { OrdererProduct, State } from 'src/constants/CommandState'

export class CreateCommandDto {
  table: number
  order: OrdererProduct[]
  waiter: string
  status: State
}
