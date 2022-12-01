import { Schema } from 'mongoose'

export const RawMaterialSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  denomination: { type: Number, require: true },
  cost: { type: Number, required: true },
  entry_date: { type: Date, default: Date.now },
})