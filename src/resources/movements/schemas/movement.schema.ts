import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Account } from '@resources/accounts/schemas/account.schema'
import mongoose, { Date, HydratedDocument } from 'mongoose'

export type MovementDocument = HydratedDocument<Movement>

@Schema()
export class Movement {

	@Prop({ type: Date, default: Date.now() })
	date: Date

	@Prop({ required: true })
	amount: number

	@Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Account.name })
	account: string

	@Prop({ required: true })
	description: string

}

export const MovementSchema = SchemaFactory.createForClass(Movement)
