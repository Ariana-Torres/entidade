import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { BrandsService } from './services/brands.service';
import { BrandController } from './controllers/brands.controller';
import { Model } from './entities/models.entity';
import { ModelController } from './controllers/models.controller';
import { ModelsService } from './services/models.service';

@Module({
  imports: [TypeOrmModule.forFeature([Brand, Model])],
  providers: [
    BrandsService,
    ModelsService,
    //aqui van los servicios
  ],
  controllers: [
    BrandController,
    ModelController,
    //aqui van los controladores
  ],
})
export class BrandsModule {}
export class ModelModele {}
