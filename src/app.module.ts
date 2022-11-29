import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RmaterialModule } from './rmaterial/rmaterial.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    RmaterialModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
