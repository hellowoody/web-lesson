import {get,update} from "./db/db.js"
import {getDbId} from "./kits/hash.js";

export const DefaultApi = (req,resp) => resp.send("hello four-week-server of Node.js !")

export const QueryFood = (req,resp) => {
    try {
        const list = get("food")
        const params = req.body
        const category = params.category
        let filter_array;
        if(category === "all"){
            filter_array  = list.filter(item => item.name.indexOf(params.keyword) >= 0 ? true : false)
        }else{
            filter_array = list.filter(item => (item.name.indexOf(params.keyword) >= 0 && item.category === category) ? true : false)
        }
        resp.send(filter_array)
    } catch (e) {
        console.log(e)
        resp.status(500).send(e.message)
    }
}

export const GoodDetail = (req,resp) => {
    try {
        const list = get("food")
        const params = req.body
        const filter_array = list.filter(item => item.id === params.id ? true : false)
        resp.send({
            code:"01",
            data:filter_array[0]
        })
    } catch (e) {
        console.log(e)
        resp.send({
            code:"02",
            data:e.message
        })
    }
}

export const HomeTopList = (req,resp) => {
    try {
        const list = get("homeTopList")
        resp.send(list)
    } catch (e) {
        resp.status(500).send(e.message)
    }
}

export const HomeCards = (req,resp) => {
    try {
        const list = get("food")
        const res = list.filter(item => item.todayFood ? true : false)
        resp.send(res)
    } catch (e) {
        resp.status(500).send(e.message)
    }
}

export const Login = (req,resp) => {
    try {
        const userlist = get("user")
        const sessionList = get("session")
        const params = req.body
        let flag = false,userObj = {},tokenId = "";
        
        for(const user of userlist){
            if(user.nickName === params.nickName){
                flag = true
                userObj = user
            }
        }
        // 判断该用户是否注册过
        if(flag){
            // 注册过
            let sessionFlag = false
            // 是否已登陆
            for(const session of sessionList) {
                if(session.userId === userObj.id){
                    // 已登陆
                    sessionFlag = true
                    session.actionTime = Date.now()
                    // 跟新会话表里的最新操作时间
                    update("session",sessionList)
                    tokenId = session.tokenId
                }
            }
            if(!sessionFlag){
                // 没有登陆，插入一条会话记录
                tokenId = updateSession(userObj.id,sessionList)
            }
        }else{
            // 没有注册过
            const id = getDbId(params.nickName);
            // 插入一条用户基础信息
            updateUser(id,params.nickName,params.avatarUrl,userlist)
            // 插入一条会话信息
            tokenId = updateSession(id.substring(0,6),sessionList)
        }
        resp.send({
            tokenId
        })
    } catch (e) {
        console.log(e)
        resp.status(500).send(e.message)
    }
}

export const Logout = (req,resp) => {
    try {
        const params = req.body
        const sessionList = get("session")
        const sessionList_filter = sessionList.filter(item => item.tokenId === params.tokenId ? false : true )
        update("session",sessionList_filter)
        resp.send("ok")
    } catch (e) {
        console.log(e)
        resp.status(500).send(e.message)
    }
}

export const EditAddress = (req,resp) => {
    try {
        const params = req.body
        const addressList = get("userAddress")
        let flag = false
        for(const address of addressList){
            if(address.userId === params.userId){
                flag = true
                address.countryCode = params.countryCode
                address.country = params.country
                address.areaCode = params.areaCode
                address.area = params.area
                address.address = params.address
                break;
            }
        }
        // 之前没存过地址
        if(!flag){
            addressList.push({
                countryCode: params.countryCode,
                country: params.country,
                areaCode: params.areaCode,
                area: params.area,
                address: params.address,
                userId: params.userId
            })
        }
        update("userAddress",addressList)
        // console.log("editaddress 接受参数111",params)
        resp.send({
            code:"01",
            data:"保存成功"
        })
    } catch (e) {
        console.log(300000,e)
        resp.send({
            code:"02",
            data:e.message
        })
    }
}

export const GetAddress = (req,resp) => {
    try {
        const params = req.body
        const addressList = get("userAddress")
        const addresses = addressList.filter(item => item.userId === params.userId)
        resp.send({
            code:"01",
            data:addresses.length > 0 ? addresses[0] : {
                countryCode:0,
                country:"天津市",
                areaCode:0,
                area:"河西区",
                address:""
            }
        })
    } catch (e) {
        resp.send({
            code:"02",
            data:e.message
        })
    }
}

// 更新用户表
const updateUser = (id,nickName,avatarUrl,userlist) => {
    userlist.push({
        id : id.substring(0,6),
        nickName : nickName,
        avatarUrl: avatarUrl,
        openId:""
    })
    update("user",userlist)
}
// 更新会话表
const updateSession = (userId,sessionList) => {
    const tokenId = getDbId(userId);
    sessionList.push({
        userId,
        tokenId,
        actionTime : Date.now()
    })
    update("session",sessionList)
    return tokenId
}


