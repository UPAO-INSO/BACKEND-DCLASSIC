import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { EmpleadosService } from 'src/empleados/empleados.service';
import { PersonasService } from 'src/personas/personas.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService, AuthService, EmpleadosService, PersonasService],
  exports: [UsersService],
})
export class UsersModule {}
