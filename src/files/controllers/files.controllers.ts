import { BadRequestException, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from '../services/files.services';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileName } from 'src/helpers/fileName.helper';
import { fileFilter } from 'src/helpers/fileFilter.helper';
import { Response } from 'express';


@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      //Llamamos al file fileFilter de multer y lr asignamos nuestro helper
      fileFilter: fileFilter,

      //Definimos en donde se va a guerdar el archivo y lo renombramos
      storage: diskStorage({
        destination: './static/products',
        filename: fileName,
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Asegurese que el atchivo es una imagen');
    }

    const url = `${file.filename}`;

    return { url };
  }

  @Get('product/:imageName')
  findProduc(@Res() res: Response, @Param('imageName') imageName: string) {
    const path = this.filesService.getStatiscImageName(imageName);

    //return path;
    res.sendFile(path);
  }

  @Get('user/:imageName')
  findUser(@Res() res: Response, @Param('imageName') imageName: string) {
    const path = this.filesService.getStatiscImageName(imageName);

    res.sendFile(path);
  }

  @Get('product/:imageId')
  getImage() {
    return 'Hola Mundo';
  }
}
