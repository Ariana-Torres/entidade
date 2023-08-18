import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { BrandsService } from './services/brands.service';
import { BrandController } from './controllers/brands.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  providers: [
    BrandsService,
    //aqui van los servicios
  ],
  controllers: [
    BrandController,
    //aqui van los controladores
  ],
})
export class BrandsModule {}
