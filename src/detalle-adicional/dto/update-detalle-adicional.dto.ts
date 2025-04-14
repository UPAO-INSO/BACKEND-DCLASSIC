import { PartialType } from '@nestjs/swagger';
import { CreateDetalleAdicionalDto } from './create-detalle-adicional.dto';

export class UpdateDetalleAdicionalDto extends PartialType(CreateDetalleAdicionalDto) {}
