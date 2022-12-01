import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateStaffDto } from './dto/create-staff.dto'
import { UpdateStaffDto } from './dto/update-staff.dto'
import { Staff, StaffDocument } from './schemas/staff.schema'

@Injectable()
export class StaffService {
  constructor(
    @InjectModel(Staff.name) private staffModel: Model<StaffDocument>
  ) { }

  async create(createStaffDto: CreateStaffDto) {
    const createdStaff = new this.staffModel(createStaffDto)
    return createdStaff.save()
  }

  findAll(): Promise<Staff[]> {
    return this.staffModel.find().exec()
  }

  findOne(id: number) {
    return this.staffModel.findById(id).exec()
  }

  update(id: number, updateStaffDto: UpdateStaffDto) {
    return this.staffModel.findByIdAndUpdate(id, updateStaffDto)
  }

  remove(id: number) {
    return this.staffModel.findByIdAndDelete(id)
  }
}
