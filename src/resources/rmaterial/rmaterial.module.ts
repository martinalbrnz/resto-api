import { Module } from '@nestjs/common'
import { RmaterialService } from './rmaterial.service'
import { RmaterialController } from './rmaterial.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { RawMaterialSchema } from './schemas/rMaterial.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'RawMaterial', schema: RawMaterialSchema }])],
  controllers: [RmaterialController],
  providers: [RmaterialService],
})
export class RmaterialModule {}
