import multer from "multer";
import path from "path"

export const uploadImg = multer({
    storage:multer.diskStorage({
        destination:"static/upload/avatar",
        filename:(req,file,callback)=>{
            const ext:string = path.extname(file.originalname); // ".png"
            callback(null,Date.now()+ext)
        }
    })
})


export const uploadGoodImg = multer({
    storage:multer.diskStorage({
        destination:"static/upload/goods",
        filename:(req,file,callback)=>{
            const ext:string = path.extname(file.originalname); // ".png"
            callback(null,Date.now()+ext)
        }
    })
})