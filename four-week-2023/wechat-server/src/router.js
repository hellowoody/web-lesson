import * as api from "./api.js"
import {uploadFile,uploadImage} from "./middleware/upload.js"

export const useRouter = (app) => {

    app.get("/",api.ping)

    app.get("/wxlogin",api.wxLogin)

    app.post("/list",api.list)

    app.post("/hometopstation",api.homeTopStation)

    app.post("/likeit",api.likeIt)

    app.post("/unlikeit",api.unLikeIt)

    app.post("/getuser",api.getUser)

    app.post("/updateuser",api.updateUser)

    app.post("/detail",api.detail)

    app.post("/upload",uploadFile.single("file"),api.upload)

    app.post("/uploadimage",uploadImage.single("file"),api.uploadImage)
}