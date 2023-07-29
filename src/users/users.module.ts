import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    //aqui van los controllers
  ],
  providers: [
    //aqui van los servicios
  ],
})
export class UsersModule {}
