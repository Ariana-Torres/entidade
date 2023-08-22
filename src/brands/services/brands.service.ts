import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';
import { CreateBrandDto } from '../dto/brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepo: Repository<Brand>,
  ) {}

  //Crear un registro
  async create(createBrandDto: CreateBrandDto) {
    const brand = await this.brandRepo.create(createBrandDto);
    await this.brandRepo.save(brand);

    return brand;
  }

  //Encontrar un registro
  findOne(id: number) {
    return this.brandRepo.findOneBy({ id });
  }

  //Mostrar todos los registros
  findAll() {
    return this.brandRepo.find({
      order: { id: 'ASC' },
    });
  }

  //Eliminar un registro
  async remove(id: number) {
    const brand = await this.findOne(id);
    await this.brandRepo.remove(brand);
    return 'Marcas eliminado satisfactoriamente';
  }

  //Actualizar un registro
  async update(id: number, cambios: CreateBrandDto) {
    const oldBrand = await this.findOne(id);
    const updateBrand = await this.brandRepo.merge(oldBrand, cambios);
    return this.brandRepo.save(updateBrand);
  }
}
