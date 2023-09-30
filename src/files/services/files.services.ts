import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  constructor() { }
  
  getStatiscImageName(imageName: string) {
    //Agregando la ruta para encontrar el archivo
    const path = join(__dirname, '../../../static/products', imageName);

    if (!existsSync(path)) {
      throw new BadRequestException(
        `No existe un registro ${imageName}`,
      );
    }
    //Si existe la imagen entonces que la retorne
    return path;
  }
}
