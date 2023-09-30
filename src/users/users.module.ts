import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './servies/users.service';
import { UserController } from './controllers/users.controller';
import { UserImage } from './entities/user-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserImage])],
  controllers: [
    UserController,
    //aqui van los controllers
  ],
  providers: [
    UsersService,
    //aqui van los servicios
    //aqui van los servicios
  ],
})
export class UsersModule {}
