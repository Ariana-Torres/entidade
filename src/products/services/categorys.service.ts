import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entities';
import { Repository } from 'typeorm';

@Injectable()
export class CategorysService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  //Crear un categoria
  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepo.create(createCategoryDto);
    await this.categoryRepo.save(category);

    return category;
  }

  //Encontrar un registro
  //findOne(id: number) {
  //  return this.productRepo.findOneBy({ id });
  //}

  //Encontrar un registro con categoria
  findOne(id: number) {
    return this.categoryRepo.findOne({
      where: { id },
      relations: {
        autor: true,
      },
    });
  }

  //Mostrar todos las categorias
  findAll() {
    return this.categoryRepo.find({
      order: { id: 'ASC' },
    });
  }

  //Eliminar una categoria
  async remove(id: number) {
    const category = await this.findOne(id);
    await this.categoryRepo.remove(category);
    return 'Categoria eliminado satisfactoriamente';
  }

  //Actualizar un registro
  async update(id: number, cambios: CreateCategoryDto) {
    const oldCategory = await this.findOne(id);
    const updateCategory = await this.categoryRepo.merge(oldCategory, cambios);
    return this.categoryRepo.save(updateCategory);
  }
}
