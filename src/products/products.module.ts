import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './services/products.service';
import { ProductController } from './controllers/products.controller';
import { ProductImage } from './entities/product-image.entity';
import { Category } from './entities/category.entity';
import { SuppliersService } from './services/supplier.service';
import { SupplierController } from './controllers/suppliers.controllers';
import { Supplier } from './entities/supplier.entity';
import { CategoryController } from './controllers/category.controllers';
import { CategoryService } from './services/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage, Category, Supplier])],
  providers: [
    ProductsService,
    CategoryService,
    SuppliersService,
    //aqui van los servicios
  ],
  controllers: [
    ProductController,
    CategoryController,
    SupplierController,
    //aqui van los controladores
  ],
})
export class ProductsModule {}
export class CategoryModule {}
