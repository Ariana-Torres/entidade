import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './services/products.service';
import { ProductController } from './controllers/products.controller';
import { ProductImage } from './entities/product-image.entity';
import { Category } from './entities/category.entity';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage, Category])],
  providers: [
    ProductsService,
    CategoryService,
    //aqui van los servicios
  ],
  controllers: [
    ProductController,
    CategoryController,
    //aqui van los controladores
  ],
})
export class ProductsModule {}
export class CategoryModule {}
