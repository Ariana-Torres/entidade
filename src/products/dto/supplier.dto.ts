import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateSupplierDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;
    //los decoradores ene el validan que la info se agregue
  
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    categoria: string;
  
    @IsDateString()
    @IsOptional()
    created_at: string;
  
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @IsNotEmpty()
    @IsNumber()
    supplier_id: number;
  }
  