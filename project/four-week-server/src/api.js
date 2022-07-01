// import {get,update} from "./db/db.js"
import {get,update} from "./db/api.js"
import {getDbId} from "./kits/hash.js";
import moment from "moment"
import {connect} from "./db/index.js"

export const DefaultApi = (req,resp) => resp.send("hello four-week-server of Node.js !")

export const PingDb = (req,resp) => {
    connect().then(client => {
        const db = client.db("four_week"); // use four_week
        db.command({ping:1}).then(res => {
            console.log(res)
            if(res.ok === 1){
                resp.send("数据库连接成功")
            }else{
                resp.send("数据库连接失败")
            }
        }).catch(err => {
            console.log(e)
            resp.send("数据库连接失败")
        })
    }).catch(e => {
        console.log(e)
        resp.send("数据库连接失败")
    })
}

export const QueryFood = async (req,resp) => {
    try {
        const list = await get("food")
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

export const GoodDetail = async (req,resp) => {
    try {
        const list = await get("food")
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

export const HomeTopList = async (req,resp) => {
    try {
        const list = await get("homeTopList")
        resp.send(list)
    } catch (e) {
        resp.status(500).send(e.message)
    }
}

export const HomeCards = async (req,resp) => {
    try {
        const list = await get("food")
        const res = list.filter(item => item.todayFood ? true : false)
        resp.send(res)
    } catch (e) {
        resp.status(500).send(e.message)
    }
}

export const Login = async (req,resp) => {
    try {
        const userlist = await get("user")
        const sessionList = await get("session")
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
                    await update("session",sessionList)
                    tokenId = session.tokenId
                }
            }
            if(!sessionFlag){
                // 没有登陆，插入一条会话记录
                tokenId = await updateSession(userObj.id,sessionList)
            }
        }else{
            // 没有注册过
            const id = getDbId(params.nickName);
            // 插入一条用户基础信息
            await updateUser(id,params.nickName,params.avatarUrl,userlist)
            // 插入一条会话信息
            tokenId = await updateSession(id.substring(0,6),sessionList)
        }
        resp.send({
            tokenId
        })
    } catch (e) {
        console.log(e)
        resp.status(500).send(e.message)
    }
}

export const Logout = async (req,resp) => {
    try {
        const params = req.body
        const sessionList = await get("session")
        const sessionList_filter = sessionList.filter(item => item.tokenId === params.tokenId ? false : true )
        await update("session",sessionList_filter)
        resp.send("ok")
    } catch (e) {
        console.log(e)
        resp.status(500).send(e.message)
    }
}

export const EditAddress =  async (req,resp) => {
    try {
        const params = req.body
        const addressList = await get("userAddress")
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
        await update("userAddress",addressList)
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

export const GetAddress = async (req,resp) => {
    try {
        const params = req.body
        const addressList = await get("userAddress")
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

export const AddCart = async (req,resp) => {
    try {
        const params = req.body
        const cartList = await get("cart")
        let flag = false;
        for(const cart of cartList){
            if(cart.userId === params.userId && cart.foodId === params.id){
                flag = true
                // cart.count = cart.count + params.count
                cart.count += params.count
                break;
            }
        }

        if(!flag){
            params.foodId = params.id
            delete params.id
            delete params.tokenId
            cartList.push(params)
        }

        await update("cart",cartList)
        resp.send({
            code:"01",
            data:"添加成功"
        })
    } catch (e) {
        resp.send({
            code:"02",
            data:e.message
        })
    }
}

export const UpdateCart =async  (req,resp) => {
    try {
        const params = req.body
        const cartList = await get("cart")
        const cart_filter = cartList.filter(item => item.userId !== params.userId)
        params.list.forEach(item => delete item.checked)
        update("cart",cart_filter.concat(params.list))
        resp.send({
            code:"01",
            data:""
        })
    } catch (e) {
        resp.send({
            code:"02",
            data:e.message
        })
    }
}

export const Cart = async (req,resp) => {
    try {
        const params = req.body
        const cartList = await get("cart")
        const data = cartList.filter(item => item.userId === params.userId)
        resp.send({
            code:"01",
            data
        })
    } catch (e) {
        resp.send({
            code:"02",
            data:e.message
        })
    }
}

export const CreateOrder = async (req,resp) => {
    try {
        const params = req.body
        const orderList = await get("order")
        const id = getDbId(Date.now().toString());
        const createTime = moment().format("YYYY-MM-DD HH:mm:ss")
        const status = "01"
        orderList.push({
            id,
            userId:params.userId,
            status,
            createTime,
            list:params.list
        })
        await update("order",orderList)

        const cartList = await get("cart")
        const cartList_filter = cartList.filter(item => {
            if(item.userId === params.userId){
                let flag = false
                for(const cart of params.list){
                    if(cart.foodId === item.foodId){
                        flag = true
                        break
                    }
                }
                if(flag){
                    return false
                }else{
                    return true
                }
            }else{
                return true
            }
        })

        await update("cart",cartList_filter)

        resp.send({
            code:"01",
            data:"创建订单成功"
        })
    } catch (e) {
        resp.send({
            code:"02",
            data:e.message
        })
    }
}

export const Order = async (req,resp) => {
    try {
        const params = req.body
        const orderList = await get("order")
        const data = orderList.filter(item => item.userId === params.userId)
        resp.send({
            code:"01",
            data
        })
    } catch (e) {
        resp.send({
            code:"02",
            data:e.message
        })
    }
}

// 更新用户表
const updateUser = async (id,nickName,avatarUrl,userlist) => {
    userlist.push({
        id : id.substring(0,6),
        nickName : nickName,
        avatarUrl: avatarUrl,
        openId:""
    })
    await update("user",userlist)
}
// 更新会话表
const updateSession = async (userId,sessionList) => {
    const tokenId = getDbId(userId);
    sessionList.push({
        userId,
        tokenId,
        actionTime : Date.now()
    })
    await update("session",sessionList)
    return tokenId
}


