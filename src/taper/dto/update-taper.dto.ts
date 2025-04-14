import { PartialType } from '@nestjs/swagger';
import { CreateTaperDto } from './create-taper.dto';

export class UpdateTaperDto extends PartialType(CreateTaperDto) {}
