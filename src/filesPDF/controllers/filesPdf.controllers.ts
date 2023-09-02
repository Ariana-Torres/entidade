import { BadRequestException, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { filerName } from "src/helpers/filterName.helper";
import { filerPdf } from "src/helpers/filterPdf.helper";
import { FilesPdfService } from "../services/filesPdf.services";

@Controller('filesPdf')
export class FilesPdfController {
  constructor(private readonly filesPdfService: FilesPdfService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      //Llamamos al file fileFilter de multer y lr asignamos nuestro helper
      fileFilter: filerPdf,

      //Definimos en donde se va a guerdar el archivo y lo renombramos
      storage: diskStorage({
        destination: './static/files/pdf/archivos/',
        filename: filerName,
      }),
  }),
  )
  uploadFile(@UploadedFile() filer: Express.Multer.File) {
    if (!filer) {
      throw new BadRequestException('Asegurese que el atchivo es una imagen');
    }

    return {
      fileName: filer.filename,
    };
  }

}
