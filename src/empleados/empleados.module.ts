import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { RolesService } from 'src/roles/roles.service';

@Module({
  controllers: [EmpleadosController],
  providers: [EmpleadosService, RolesService],
})
export class EmpleadosModule {}
