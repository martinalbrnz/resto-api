import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AccountsModule } from '@resources/accounts/accounts.module'
import { AccountsService } from '@resources/accounts/accounts.service'
import { MovementsController } from './movements.controller'
import { MovementsService } from './movements.service'
import { Movement, MovementSchema } from './schemas/movement.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Movement.name, schema: MovementSchema }]), AccountsModule],
  controllers: [MovementsController],
  providers: [MovementsService, AccountsService],
  exports: [MongooseModule.forFeature([{ name: Movement.name, schema: MovementSchema }])],
})
export class MovementsModule { }
