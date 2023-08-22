import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateModelDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;
  //los decoradores ene el validan que la info se agregue

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(100)
  marca_id: number;

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
  stock: number;

  @IsString()
  @IsNotEmpty()
  user_id: string;
}
