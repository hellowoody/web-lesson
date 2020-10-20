import multer from 'multer'
import path from 'path'

//配置multer的内容
export const upload = multer({
    storage:multer.diskStorage({
        // destination(req,file,callback){
        //     callback(null,"assets/uploads")
        // },
        destination:"assets/uploads",
        filename(req,file,callback){
            const extname = path.extname(file.originalname)  //获取上传文件名的文件后缀（格式）
            callback(null,Date.now()+extname)
        },
    })
})