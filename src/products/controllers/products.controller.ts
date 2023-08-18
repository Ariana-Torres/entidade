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
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly ProductsServices: ProductsService) {}

  @Post()
  async create(@Body() produstDto: CreateProductDto) {
    return await this.ProductsServices.create(produstDto);
  }

  @Get()
  findAll() {
    return this.ProductsServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ProductsServices.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ProductsServices.remove(id);
  }

  //El metodo patch actualiza parcialmente
  //Los pipes son transformadores, transforma la data
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.ProductsServices.update(id, createProductDto);
  }
}
