import { Module } from "@nestjs/common";
import { FilesPdfController } from "./controllers/filesPdf.controllers";
import { FilesPdfService } from "./services/filesPdf.services";

@Module({
    controllers: [FilesPdfController],
    providers: [FilesPdfService],
  })
  export class FilesPdfModule {}