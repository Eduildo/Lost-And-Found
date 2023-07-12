import multer from "multer";
import path from "path";

export async function storePhoto(){

     await multer.storage({
        destination:(request, file, callback) => {
            callback(null, path.resolve("uploads"));
        },
    
        filename:(request, file, callback) => {
    
            const time = new Date().getTime();
    
            callback(null, `${time}_${file.originalName}`)
    
        },
    })
}
