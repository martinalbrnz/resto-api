import { ObjectId } from 'mongoose'

export interface Product {
	_id: ObjectId
	name: string
	price: number
	units: number
}
