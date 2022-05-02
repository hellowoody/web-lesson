import fs from "fs";

const checkFileHandle = (filename,res,cb) => {
    fs.stat(filename,(err,stats) => {
        if(err) return cb(err)
        const startIndex = filename.lastIndexOf("/")+1
        if(stats.isDirectory()){
            const i = res.push({})
            readDir(filename,res[i-1],cb)
        }else if(stats.isFile()){
            const name = filename.slice(startIndex)
            res.push(name)
            cb()
        }
    })
}

const readDir = (dir,res,cb) => {
    fs.readdir(dir,(err,files) => {
        if (err) return cb(err)
        const startIndex = dir.lastIndexOf("/")+1
        res.name = dir.slice(startIndex)
        res.path = dir
        res.dir = []
        const iterator = (index) => {
            if(files.length === index) return cb()

            checkFileHandle(dir+"/"+files[index],res.dir,(err) => {
                if(err) return cb(err)

                iterator(index+1)
            })
        }

        iterator(0)
    })
}

export const listNestedFiles = (dir,cb) => {
    const res = {}
    readDir(dir,res,(err) => {
        if(err) return cb(err)
        cb(null,res)
    })
}