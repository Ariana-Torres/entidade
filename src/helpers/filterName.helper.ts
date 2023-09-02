import {v4 as id} from 'uuid';

export const filerName = (
    req: Express.Request,
    filer: Express.Multer.File,
    callback,
) => {
     //si el archivono existe o no viene entonces:
     if(!filer) return callback(new Error('Archivo vacio'), false);

     //llegamos hasta el mimwtypw y tomamos la extencion del archivo
     const filerExtension = filer.mimetype.split('/')[1];

     //se encarga de darle el nombre
     const filerNamer = `${id()}.${filerExtension}`;
 

     callback(null, filerNamer);
};