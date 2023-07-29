import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [
    //aqui van los servicios
  ],
  controllers: [
    //aqui van los controladores
  ],
})
export class ProductsModule {}
