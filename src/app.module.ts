import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AccountsModule } from '@resources/accounts/accounts.module'
import { CommandsModule } from '@resources/commands/commands.module'
import { MovementsModule } from '@resources/movements/movements.module'
import { ProductsModule } from '@resources/products/products.module'
import { RmaterialModule } from '@resources/rmaterial/rmaterial.module'
import { StaffModule } from '@resources/staff/staff.module'
import { TablesModule } from '@resources/tables/tables.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    StaffModule,
    RmaterialModule,
    ProductsModule,
    CommandsModule,
    TablesModule,
    AccountsModule,
    MovementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
