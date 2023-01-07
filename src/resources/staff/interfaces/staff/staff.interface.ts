import { ObjectId } from 'mongoose'

export interface Staff {
	_id: ObjectId
	name: string
	lastName: string
	role: number
}
