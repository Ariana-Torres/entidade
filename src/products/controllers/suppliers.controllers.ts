import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { SuppliersService } from "../services/supplier.service";
import { CreateSupplierDto } from "../dto/supplier.dto";

@Controller('suppliers')
export class SupplierController {
  constructor(private readonly SuppliersServices: SuppliersService) {}

  @Post()
  async create(@Body() suppliersDto: CreateSupplierDto) {
    return await this.SuppliersServices.create(suppliersDto);
  }

  @Get()
  findAll() {
    return this.SuppliersServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.SuppliersServices.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.SuppliersServices.remove(id);
  }

  //El metodo patch actualiza parcialmente
  //Los pipes son transformadores, transforma la data
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createSupplierDto: CreateSupplierDto,
  ) {
    return this.SuppliersServices.update(id, createSupplierDto);
  }
}
