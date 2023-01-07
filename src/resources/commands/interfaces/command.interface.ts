import { OrdererProduct, State } from 'src/constants/CommandState'

export interface Command {
  table: number
  order: OrdererProduct[]
  generalState: State
}
