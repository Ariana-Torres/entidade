import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ModelsService } from '../services/models.service';
import { CreateModelDto } from '../dto/models.dto';

@Controller('models')
export class ModelController {
  constructor(private readonly ModelsServices: ModelsService) {}

  @Post()
  async create(@Body() modelsDto: CreateModelDto) {
    return await this.ModelsServices.create(modelsDto);
  }

  @Get()
  findAll() {
    return this.ModelsServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ModelsServices.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ModelsServices.remove(id);
  }

  //El metodo patch actualiza parcialmente
  //Los pipes son transformadores, transforma la data
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createModelDto: CreateModelDto,
  ) {
    return this.ModelsServices.update(id, createModelDto);
  }
}
