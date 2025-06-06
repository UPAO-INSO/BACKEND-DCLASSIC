import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ClientesModule } from './clientes/clientes.module';
import { MesasModule } from './mesas/mesas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ComprobantesModule } from './comprobantes/comprobantes.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { PersonasModule } from './personas/personas.module';
import { RolesModule } from './roles/roles.module';
import { TipoProductoModule } from './tipo-producto/tipo-producto.module';

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
    ProductsModule,
    EmpleadosModule,
    PersonasModule,
    RolesModule,
    TipoProductoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
