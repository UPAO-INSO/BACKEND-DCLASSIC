import { Module } from '@nestjs/common';
import { BebidasService } from './bebidas.service';
import { BebidasController } from './bebidas.controller';
import { TipoBebidaService } from 'src/tipo-bebida/tipo-bebida.service';

@Module({
  controllers: [BebidasController],
  providers: [BebidasService, TipoBebidaService],
})
export class BebidasModule {}
