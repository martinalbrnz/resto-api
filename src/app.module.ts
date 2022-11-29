import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RmaterialModule } from './rmaterial/rmaterial.module';

@Module({
  imports: [RmaterialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
