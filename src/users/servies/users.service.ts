import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { createUserDto } from '../dto/user.dto';
import { UserImage } from '../entities/user-image.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(UserImage)
    private readonly userImageRepo: Repository<UserImage>,

    private readonly dataSource: DataSource,
  ) {}

  //Crear un registro
  /*async create(createUserDto: createUserDto) {
    const user = await this.userRepo.create(createUserDto);
    await this.userRepo.save(user);

    return user;
  }*/

  //Crear un producto y agregar imagen
  async create(userDto: createUserDto) {
    const { images = [], ...detailsUsers } = userDto;

    const user = await this.userRepo.create({
      ...detailsUsers,
      images: images.map((image) => this.userImageRepo.create({ url: image })),
    });

    await this.userRepo.save(user);
    return user;
  }

  //Encontrar un registro
  findOne(id: number) {
    return this.userRepo.findOne({ 
    where: {id},
      relations: {
        images: true
      },
   });
  }

  //Mostrar todos los registros
  findAll() {
    return this.userRepo.find({
      order: { id: 'ASC' },
      relations: {
        images: true,
      },
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
    const { images, ...updateAll } = cambios;
    const user = await this.userRepo.preload({
      id: id,
      ...updateAll, //para esparcir todos los datos del productDto
    });

    //Empezamos a corre nuestro queryRunner, esto seria el punto de partid de nuestra transsaccion
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    if (images) {
      //si imagenes no esta vacio, vamos a borrar las imagenes existenres
      await queryRunner.manager.delete(UserImage, { user: { id } });

      //Aqui creamos nuevas imagenes del users
      user.images = images.map((image) =>
        this.userImageRepo.create({ url: image }),
      );
    } else {
      user.images = await this.userImageRepo.findBy({ user: { id } });
    }

    //Guardar el user
    await queryRunner.manager.save(user);

    //Finalizamos la transacción y liberamos el queryRunner
    await queryRunner.commitTransaction();
    await queryRunner.release();

    return user;
  }
}
