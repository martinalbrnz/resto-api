import { Module } from '@nestjs/common'
import { TablesService } from './tables.service'
import { TablesController } from './tables.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Table, TableSchema } from './schemas/table.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Table.name, schema: TableSchema }])],
  controllers: [TablesController],
  providers: [TablesService],
  exports: [MongooseModule.forFeature([{ name: Table.name, schema: TableSchema }])],
})
export class TablesModule {}
