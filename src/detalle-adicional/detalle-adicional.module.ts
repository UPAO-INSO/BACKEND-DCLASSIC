import { Module } from '@nestjs/common';
import { DetalleAdicionalService } from './detalle-adicional.service';
import { DetalleAdicionalController } from './detalle-adicional.controller';

@Module({
  controllers: [DetalleAdicionalController],
  providers: [DetalleAdicionalService],
})
export class DetalleAdicionalModule {}
