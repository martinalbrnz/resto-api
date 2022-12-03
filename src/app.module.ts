import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RmaterialModule } from './rmaterial/rmaterial.module'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { StaffModule } from './staff/staff.module'
import { ProductsModule } from './products/products.module'
import { CommandsModule } from './commands/commands.module'
import { TablesModule } from './tables/tables.module'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    StaffModule,
    RmaterialModule,
    ProductsModule,
    CommandsModule,
    TablesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
