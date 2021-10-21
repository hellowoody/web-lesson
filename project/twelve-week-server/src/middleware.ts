import multer from "multer";
import path from "path"; //nodejs 内置的对象  

// 配置multer的内容
export const upload:any = multer({
    storage:multer.diskStorage({
        destination:"static/upload",
        filename:(req,file,callback) => {
            // file: {originalname:123.png,buffer:array()}
            const extname:string = path.extname(file.originalname)  // 拿到原先文件后缀名
            callback(null,Date.now()+extname);
        }
    })
})
