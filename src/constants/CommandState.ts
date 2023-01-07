export enum State {
  InProgress = 0,
  Completed = 1,
  Cancelled,
}

export type OrdererProduct = { product: string, units: number, state: State }
