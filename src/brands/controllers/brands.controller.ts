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
import { BrandsService } from '../services/brands.service';
import { CreateBrandDto } from '../dto/brand.dto';

@Controller('brands')
export class BrandController {
  constructor(private readonly BrandsServices: BrandsService) {}

  @Post()
  async create(@Body() brandsDto: CreateBrandDto) {
    return await this.BrandsServices.create(brandsDto);
  }

  @Get()
  findAll() {
    return this.BrandsServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.BrandsServices.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.BrandsServices.remove(id);
  }

  //El metodo patch actualiza parcialmente
  //Los pipes son transformadores, transforma la data
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createBrandDto: CreateBrandDto,
  ) {
    return this.BrandsServices.update(id, createBrandDto);
  }
}
