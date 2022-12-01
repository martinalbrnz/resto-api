import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateRmaterialDto } from './dto/create-rmaterial.dto'
import { RMaterial } from './interfaces/rMaterial.interface'

@Injectable()
export class RmaterialService {
  constructor(@InjectModel('RawMaterial') private rawMaterialModel: Model<RMaterial>) { }

  async findAll(): Promise<RMaterial[]> {
    const Materials = await this.rawMaterialModel.find()
    return Materials
  }

  async findOne(materialID: string): Promise<RMaterial> {
    const Material = await this.rawMaterialModel.findById(materialID)
    return Material
  }

  async create(createRmaterialDto: CreateRmaterialDto): Promise<RMaterial> {
    const createdMaterial = new this.rawMaterialModel({ ...createRmaterialDto }).save()
    return createdMaterial
  }

  async remove(materialID: string): Promise<RMaterial> {
    const deletedMaterial = await this.rawMaterialModel.findByIdAndDelete(materialID)
    return deletedMaterial
  }

  async update(materialID: string, createRmaterialDto: CreateRmaterialDto): Promise<RMaterial> {
    const updatedMaterial = await this.rawMaterialModel.findByIdAndUpdate(materialID, createRmaterialDto, { new: true })
    return updatedMaterial
  }
}
