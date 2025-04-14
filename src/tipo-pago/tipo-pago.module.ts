import { Module } from '@nestjs/common';
import { TipoPagoService } from './tipo-pago.service';
import { TipoPagoController } from './tipo-pago.controller';

@Module({
  controllers: [TipoPagoController],
  providers: [TipoPagoService],
})
export class TipoPagoModule {}
