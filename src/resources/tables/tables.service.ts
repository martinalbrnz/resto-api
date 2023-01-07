import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateTableDto } from './dto/create-table.dto'
import { UpdateTableDto } from './dto/update-table.dto'
import { Table, TableDocument } from './schemas/table.schema'

@Injectable()
export class TablesService {
  constructor(@InjectModel(Table.name) private tableMethod: Model<TableDocument>) { }

  findAll(): Promise<Table[]> {
    const allTables = this.tableMethod.find().exec()
    return allTables
  }

  findOne(id: string) {
    const table = this.tableMethod.findById(id).exec()
    return table
  }

  async create(createTableDto: CreateTableDto) {
    const createdTable = await new this.tableMethod(createTableDto).save()
    return createdTable
  }

  update(id: string, updateTableDto: UpdateTableDto) {
    const updatedTable = this.tableMethod.findByIdAndUpdate(id, updateTableDto, { new: true })
    return updatedTable
  }

  remove(id: string) {
    const editedTable = this.tableMethod.findByIdAndUpdate(id, { command: [] }, { new: true })
    return editedTable
  }
}
