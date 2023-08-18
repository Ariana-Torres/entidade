import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  //Crear un registro
  async create(createUserDto: createUserDto) {
    const user = await this.userRepo.create(createUserDto);
    await this.userRepo.save(user);

    return user;
  }

  //Encontrar un registro
  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  //Mostrar todos los registros
  findAll() {
    return this.userRepo.find({
      order: { id: 'ASC' },
    });
  }

  //Eliminar un registro
  async remove(id: number) {
    const user = await this.findOne(id);
    await this.userRepo.remove(user);
    return 'User eliminado satisfactoriamente';
  }

  //Actualizar un registro
  async update(id: number, cambios: createUserDto) {
    const oldUser = await this.findOne(id);
    const updateUser = await this.userRepo.merge(oldUser, cambios);
    return this.userRepo.save(updateUser);
  }
}
