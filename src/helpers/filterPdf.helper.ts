export const filerPdf = (
    req: Express.Request,
    filer: Express.Multer.File,
    callback,
) => {
    //si el archivono existe o no viene entonces:
    if(!filer) return callback(new Error('Archivo vacio'), false);

    //llegamos hasta el mimwtypw y tomamos la extencion del archivo
    const filerExtension = filer.mimetype.split('/')[1];

    //estas serian ños axtensiones validas para los archivos
    const valiExtension = ['pdf'];

    //si las extensiones validas incluyen la extension deñ archivo
    if(valiExtension.includes(filerExtension)){
        return callback(null, true);
    }

    callback(null, false);
};