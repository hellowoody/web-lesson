
import fs from "fs"
import {resolve,dirname} from "path"
import {fileURLToPath} from "url"

const filename = fileURLToPath(import.meta.url)
const __dirname = dirname(filename)

export const hello = () => "hello Graphql!!!"

export const msg = () => "this is message"

export const homecasual = () => {
    return [
        "img01",
        "img02",
        "img03",
    ]
}

export const list = (parent,args) => {
    console.log(args)
    const LIST = [
        {name:"zhang",score:90},
        {name:"li",score:80},
        {name:"wang",score:70},
    ]
    return LIST.filter(v => {
        switch (args.staged) {
            case "A":
                return v.score >= 90        
            case "B":
                return v.score >= 80 && v.score < 90     
            case "C":
                return v.score >= 70 && v.score < 80           
            default:
                return true
        }
    })
}

export const user = () => ({
    name:"admin",
    role:"manager",
    avatar:"头像"
})

const products = [
    {
        id:"P001",
        name:"咖啡",
        price:9.9,
        status:"上架",
        count:100,
        timestamp:"XXXXXXX",
        attrs:["加热","加冰"]
    },
    {
        id:"P002",
        name:"奶茶",
        price:19.9,
        status:"上架",
        count:20,
        timestamp:"XXXXXXX",
        attrs:["加热","加冰"]
    },
    {
        id:"P003",
        name:"可乐",
        price:6.00,
        status:"上架",
        count:1000,
        timestamp:"XXXXXXX",
        attrs:["常温","加冰"]
    },
]

export const getProduct = (parent,args) => {
    console.log("args",args)
    return products.filter(v => args.id === v.id).length === 0 ? {} : products.filter(v => args.id === v.id)[0]
}

export const productList = (parent,args) => {
    console.log("productList args",args)
    const {start,limit} = args
    if(args.name){
        const list = products.filter(v => v.name.indexOf(args.name) >= 0)
        return list.slice(start,start+limit)
    }else{
        return products.slice(start,start+limit)
    }
}

function loadJson(path){
    const abs_path = resolve(__dirname,path)
    const data = fs.readFileSync(abs_path,"utf-8")
    const obj = JSON.parse(data)
    return obj
}

function updateJson(path,data){
    const abs_path = resolve(__dirname,path)
    fs.writeFileSync(abs_path,data)
}

export const getProvince = (parent,args,context,info) => {
    let id
    // console.log(parent)
    if(parent){
        // console.log(1000)
        id = parent.bigId
    }else{
        // console.log(2000)
        id = args.id
    }
    const dict = loadJson("../data/dict.json")
    const list = dict.BigCategory.filter(v => v.id === id)
    if(list.length === 0){
        return {}
    }else{
        return list[0]
    }
}

export const getCountry = (parent,args,context,info) => {
    const dict = loadJson("../data/dict.json")
    const list = dict.SmallCategory.filter(v => v.id === args.id)
    if(list.length === 0){
        return {}
    }else{
        return list[0]
    }
}

export const smallList = (parent,args,context,info) => {
    console.log("parent:",parent)
    const dict = loadJson("../data/dict.json")
    const list = dict.SmallCategory.filter(v => v.bigId === parent.id)
    return list
}

export const formatUnit = (parent) => {
    console.log("parent:",parent)
    return parent.area.toFixed(2) + "万平方公里"
}

export const updateArea = (parent,args) => {
    // const id = args.id
    // const newArea = args.area
    const {id,area:newArea} = args
    const dict = loadJson("../data/dict.json")
    let resItem 
    dict.BigCategory.map(v => {
        if(v.id === id){
            v.area = newArea
            resItem = v
        }
        return v
    })

    updateJson("../data/dict.json",JSON.stringify(dict,null,2))
    return {
        code:"01",
        msg:"更新成功",
        data:resItem
    }
}