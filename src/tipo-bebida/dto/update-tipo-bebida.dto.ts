import { PartialType } from '@nestjs/swagger';
import { CreateTipoBebidaDto } from './create-tipo-bebida.dto';

export class UpdateTipoBebidaDto extends PartialType(CreateTipoBebidaDto) {}
