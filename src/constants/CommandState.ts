export enum State {
  InProgress = 0,
  Completed,
  Cancelled,
}

export type OrdererProduct = { productId: string, units: number, state: State }
