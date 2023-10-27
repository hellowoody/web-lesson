const express = require("express")
const {resolve} = require("path")
const fs = require("fs")
const child_process = require("child_process")
const util = require("util")

const exec = util.promisify(child_process.exec)

const app = express()
console.log("__dirname",__dirname)
app.use("/",express.static(resolve(__dirname,"static/pages")))
app.use("/",express.static(resolve(__dirname,"static/videos")))


app.get("/ping",(req,resp) =>{
    resp.send("pong")
})


app.get("/prehls",async (req,resp) => {
    const tools_path = resolve(__dirname,"tools/")
    const videos_path = resolve(__dirname,"static/videos")

    await exec(`${tools_path}/ffmpeg -y -i ${videos_path}/a.mp4 -vcodec copy -vbsf h264_mp4toannexb ${videos_path}/a.ts`)

    // 是否要创建chunk
    try {
        fs.accessSync(videos_path+"/chunk",fs.constants.F_OK)
        console.log("chunk存在，不需要创建")
    } catch (error) {
        console.log("videos文件夹下面没有chunk，需要创建")
        fs.mkdirSync(videos_path+"/chunk")
    }

    await exec(`${tools_path}/ffmpeg -i  ${videos_path}/a.ts -c copy -map 0 -f segment -segment_list  ${videos_path}/chunk/index.m3u8 -segment_time 10  ${videos_path}/chunk/a-%04d.ts`)

    resp.send("ok")
})

app.listen(3000,() => console.log("1.simpke server is listening 3000..."))