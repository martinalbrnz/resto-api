import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateMovementDto } from './dto/create-movement.dto'
import { UpdateMovementDto } from './dto/update-movement.dto'
import { Movement, MovementDocument } from './schemas/movement.schema'

@Injectable()
export class MovementsService {
  constructor(
    @InjectModel(Movement.name) private movementModel: Model<MovementDocument>
  ) { }

  create(createMovementDto: CreateMovementDto) {
    const createdMovement = new this.movementModel(createMovementDto)
    return createdMovement.save()
  }

  findIndexed(index: number, size: number) {
    return this.movementModel
      .find()
      .skip((Number(index) - 1) * Number(size))
      .limit(size)
      .populate('account', { _id: 0, name: 1 })
      .exec()
  }

  findOne(id: string) {
    return this.movementModel.findById(id)
      .populate('account', { _id: 0, name: 1 })
      .exec()
  }

  update(id: string, updateMovementDto: UpdateMovementDto) {
    return this.movementModel.findByIdAndUpdate(id, updateMovementDto, { new: true })
  }

  remove(id: string) {
    return this.movementModel.findByIdAndDelete(id)
  }
}
