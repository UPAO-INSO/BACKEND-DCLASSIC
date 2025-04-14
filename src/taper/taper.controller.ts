import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaperService } from './taper.service';
import { CreateTaperDto } from './dto/create-taper.dto';
import { UpdateTaperDto } from './dto/update-taper.dto';

@Controller('taper')
export class TaperController {
  constructor(private readonly taperService: TaperService) {}

  @Post()
  create(@Body() createTaperDto: CreateTaperDto) {
    return this.taperService.create(createTaperDto);
  }

  @Get()
  findAll() {
    return this.taperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taperService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaperDto: UpdateTaperDto) {
    return this.taperService.update(+id, updateTaperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taperService.remove(+id);
  }
}
