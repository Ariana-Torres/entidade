import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './services/products.service';
import { ProductController } from './controllers/products.controller';
import { ProductImage } from './entities/product-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage])],
  providers: [
    ProductsService,
    //aqui van los servicios
  ],
  controllers: [
    ProductController,
    //aqui van los controladores
  ],
})
export class ProductsModule {}
