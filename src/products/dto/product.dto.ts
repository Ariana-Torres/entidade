import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;
  //los decoradores ene el validan que la info se agregue

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsString()
  @IsOptional()
  filename: string;

  @IsDateString()
  @IsOptional()
  created_at: string;
}
