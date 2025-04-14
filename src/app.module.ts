import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ClientesModule } from './clientes/clientes.module';
import { MesasModule } from './mesas/mesas.module';
import { PlatosModule } from './platos/platos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ComprobantesModule } from './comprobantes/comprobantes.module';
import { AdicionalesModule } from './adicionales/adicionales.module';
import { TipoPagoModule } from './tipo-pago/tipo-pago.module';
import { DetalleAdicionalModule } from './detalle-adicional/detalle-adicional.module';
import { BebidasModule } from './bebidas/bebidas.module';
import { TaperModule } from './taper/taper.module';
import { EntradaModule } from './entrada/entrada.module';
import { TipoBebidaModule } from './tipo-bebida/tipo-bebida.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    ClientesModule,
    MesasModule,
    PlatosModule,
    PedidosModule,
    ComprobantesModule,
    AdicionalesModule,
    TipoPagoModule,
    DetalleAdicionalModule,
    BebidasModule,
    TaperModule,
    EntradaModule,
    TipoBebidaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
