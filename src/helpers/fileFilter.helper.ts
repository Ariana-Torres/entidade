export const fileFilter = (
    req: Express.Request,
    file: Express.Multer.File,
    callback,
) => {
    //si el archivono existe o no viene entonces:
    if(!file) return callback(new Error('Archivo vacio'), false);

    //llegamos hasta el mimwtypw y tomamos la extencion del archivo
    const fileExtension = file.mimetype.split('/')[1];

    //estas serian ños axtensiones validas para los archivos
    const valiExtension = ['jpg','png','JPG','JPEG', 'PNG', 'jpeg', 'docx'];

    //si las extensiones validas incluyen la extension deñ archivo
    if(valiExtension.includes(fileExtension)){
        return callback(null, true);
    }

    callback(null, false);
};