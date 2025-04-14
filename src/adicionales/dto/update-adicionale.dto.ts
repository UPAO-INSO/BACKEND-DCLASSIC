import { PartialType } from '@nestjs/swagger';
import { CreateAdicionaleDto } from './create-adicionale.dto';

export class UpdateAdicionaleDto extends PartialType(CreateAdicionaleDto) {}
