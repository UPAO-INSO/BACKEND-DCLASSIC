import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { MesasModule } from 'src/mesas/mesas.module';

@Module({
  imports: [MesasModule],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
