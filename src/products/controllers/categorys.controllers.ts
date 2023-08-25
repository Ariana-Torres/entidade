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
import { CategorysService } from '../services/categorys.service';
import { CreateCategoryDto } from '../dto/category.dto';

@Controller('categorys')
export class CategorysController {
  constructor(private readonly CategorysServices: CategorysService) {}

  @Post()
  async create(@Body() categoryDto: CreateCategoryDto) {
    return await this.CategorysServices.create(categoryDto);
  }

  @Get()
  findAll() {
    return this.CategorysServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.CategorysServices.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.CategorysServices.remove(id);
  }

  //El metodo patch actualiza parcialmente
  //Los pipes son transformadores, transforma la data
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    return this.CategorysServices.update(id, createCategoryDto);
  }
}
