import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  sexo: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  active: boolean;
}
