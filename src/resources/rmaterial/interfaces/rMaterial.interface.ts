import { Document } from 'mongoose'

export interface RMaterial extends Document {
  readonly name: string,
  readonly amount: number,
  readonly denomination: number,
  readonly cost: number,
  readonly entry_date: Date,
}
