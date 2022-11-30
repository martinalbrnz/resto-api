import { Module } from '@nestjs/common';
import { RmaterialService } from './rmaterial.service';
import { RmaterialController } from './rmaterial.controller';

@Module({
  controllers: [RmaterialController],
  providers: [RmaterialService],
})
export class RmaterialModule {}
