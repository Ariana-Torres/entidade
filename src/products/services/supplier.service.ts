import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSupplierDto } from "../dto/supplier.dto";
import { Supplier } from "../entities/supplier.entity";

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepo: Repository<Supplier>,
  ) {}

  //Crear un Proveedor
  async create(createSupplierDto: CreateSupplierDto) {
    const supplier = await this.supplierRepo.create(createSupplierDto);
    await this.supplierRepo.save(supplier);

    return supplier;
  }

  //Encontrar un registro
  //findOne(id: number) {
  //  return this.productRepo.findOneBy({ id });
  //}

  //Encontrar un registro con proveedor
  findOne(id: number) {
    return this.supplierRepo.findOne({
      where: { id },
      relations: {
        autor: true,
      },
    });
  }

  //Mostrar todos las proveedor
  findAll() {
    return this.supplierRepo.find({
      order: { id: 'ASC' },
    });
  }

  //Eliminar una proveedor
  async remove(id: number) {
    const supplier = await this.findOne(id);
    await this.supplierRepo.remove(supplier);
    return 'Proveedor eliminado satisfactoriamente';
  }

  //Actualizar un proveedor
  async update(id: number, cambios: CreateSupplierDto) {
    const oldSupplier = await this.findOne(id);
    const updateSupplier = await this.supplierRepo.merge(oldSupplier, cambios);
    return this.supplierRepo.save(updateSupplier);
  }
}
