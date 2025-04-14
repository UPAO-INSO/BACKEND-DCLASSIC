import { Module } from '@nestjs/common';
import { TaperService } from './taper.service';
import { TaperController } from './taper.controller';

@Module({
  controllers: [TaperController],
  providers: [TaperService],
})
export class TaperModule {}
