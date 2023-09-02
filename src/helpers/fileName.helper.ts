import {v4 as id} from 'uuid';

export const fileName = (
    req: Express.Request,
    file: Express.Multer.File,
    callback,
) => {
     //si el archivono existe o no viene entonces:
     if(!file) return callback(new Error('Archivo vacio'), false);

     //llegamos hasta el mimwtypw y tomamos la extencion del archivo
     const fileExtension = file.mimetype.split('/')[1];

     //se encarga de darle el nombre
     const fileNamer = `${id()}.${fileExtension}`;
 

     callback(null, fileNamer);
};