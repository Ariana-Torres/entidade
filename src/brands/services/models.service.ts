import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from '../entities/models.entity';
import { Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepo: Repository<Model>,
  ) {}

  //Crear un modelo
  async create(createModelDto) {
    const Model = await this.modelRepo.create(createModelDto);
    await this.modelRepo.save(Model);

    return Model;
  }

  //Encontrar un modelo
  //findOne(id: number) {
  //return this.modelRepo.findOneBy({ id });
  //}

  //Encontrar un registro con relaciones
  findOne(id: number) {
    return this.modelRepo.findOne({
      where: { id },
      relations: {
        autor: true,
      },
    });
  }

  //Mostrar todos los modelo
  findAll() {
    return this.modelRepo.find({
      order: { id: 'ASC' },
    });
  }

  //Eliminar un modelo
  async remove(id: number) {
    const model = await this.findOne(id);
    await this.modelRepo.remove(model);
    return 'Modelo eliminado satisfactoriamente';
  }

  //Actualizar un registro
  async update(id: number, cambios) {
    const oldModel = await this.findOne(id);
    const updateModel = await this.modelRepo.merge(oldModel, cambios);
    return this.modelRepo.save(updateModel);
  }
}
