import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule, ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { FilesPdfModule } from './filesPDF/filesPdf.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'shop',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductsModule,
    CategoryModule,
    UsersModule,
    BrandsModule,
    FilesModule,
    FilesPdfModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
