import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MovementsController } from './movements.controller'
import { MovementsService } from './movements.service'
import { Movement, MovementSchema } from './schemas/movement.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Movement.name, schema: MovementSchema }])],
  controllers: [MovementsController],
  providers: [MovementsService],
  exports: [MongooseModule.forFeature([{ name: Movement.name, schema: MovementSchema }])],
})
export class MovementsModule { }
