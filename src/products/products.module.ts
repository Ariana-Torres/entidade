import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './services/products.service';
import { ProductController } from './controllers/products.controller';
import { ProductImage } from './entities/product-image.entity';
import { CategorysService } from './services/categorys.service';
import { CategorysController } from './controllers/categorys.controllers';
import { Category } from './entities/category.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage, Category])],
  providers: [
    ProductsService,
    CategorysService,
    //aqui van los servicios
  ],
  controllers: [
    ProductController,
    CategorysController,
    //aqui van los controladores
  ],
})
export class ProductsModule {}
export class CategoryModule {}
