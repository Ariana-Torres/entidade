import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './services/products.service';
import { ProductController } from './controllers/products.controller';
import { ProductImage } from './entities/product-image.entity';
import { Category } from './entities/category.entity';
<<<<<<< HEAD
import { SuppliersService } from './services/supplier.service';
import { SupplierController } from './controllers/suppliers.controllers';
import { Supplier } from './entities/supplier.entity';
=======
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controllers';
>>>>>>> 095d1e43116bb79b2c83ccdf095b04e721507797

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage, Category, Supplier])],
  providers: [
    ProductsService,
<<<<<<< HEAD
    CategorysService,
    SuppliersService,
=======
    CategoryService,
>>>>>>> 095d1e43116bb79b2c83ccdf095b04e721507797
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
