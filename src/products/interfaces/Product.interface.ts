import { ObjectId } from 'mongoose'

export interface Product {
	_id: ObjectId
	price: number
	units: number
}
