import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ClientesModule } from './clientes/clientes.module';
import { MesasModule } from './mesas/mesas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ComprobantesModule } from './comprobantes/comprobantes.module';
import { AdicionalesModule } from './adicionales/adicionales.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    ClientesModule,
    MesasModule,
    PedidosModule,
    ComprobantesModule,
    AdicionalesModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
