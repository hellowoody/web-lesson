import {wxLogin as wxLoginApi } from "./kits/fetch.js"
import {get,update} from "./db/index.js"

const BASE_URL = "http://localhost:3000/static/"
// openid: 'oA7oq43cEyO31KFtBIsx711ZA-7s'
export const ping = (req,resp) => {
    resp.send("server ok!")
}

export const list = (req,resp) => {
    
    const {body} = req

    console.log(body)
    const list = get("StationList").filter( item => item.company.indexOf(body.content) >= 0)
    const userLikeStation = get("UserLikeStation").filter( item => item.openid === body.openid)
    resp.json({
        list:list.slice(body.startIdx,body.startIdx + body.pageSize),
        userLikeStation:userLikeStation.length === 0 ? [] : userLikeStation[0].stations
    })
}

export const homeTopStation = (req,resp) => {
    
    const {body} = req

    console.log(body)
    const list = get("StationList").slice(0,5)
    const userLikeStation = get("UserLikeStation").filter( item => item.openid === body.openid)
    resp.json({
        list,
        userLikeStation:userLikeStation.length === 0 ? [] : userLikeStation[0].stations
    })
}

export const wxLogin = async (req,resp) => {
    
    const {query} = req

    console.log(query)

    const res = await wxLoginApi(query.code)

    console.log(res)
    if(res && res.openid && res.openid !== ""){
        // openid 存数据库 
        const userList = get("User")
        const userFilter = userList.filter( item => item.openid === res.openid)
        if(userFilter.length > 0){
            resp.json({
                code:1,
                data:{
                    ...userFilter[0],
                    avatar:BASE_URL + userFilter[0].avatar
                }
            })
        }else{
            // 数据库新增一条openid的用户对象
            const newUser = {
                openid: res.openid,
                name:"微信用户",
                avatar:"https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
            }
            userList.push(newUser)
            update("User",userList)
            resp.json({
                code:1,
                data:newUser,
            })
        }
    }else{
        resp.json({
            code:2,
            msg:"微信登录失败",
            data:{}
        })
    }

    
}

export const likeIt = async (req,resp) => {
    
    const {body} = req

    console.log(body)

    const list = get("UserLikeStation")

    const listFilter = list.filter(item => item.openid === body.openid) 
    if(listFilter.length >= 1){
        if(listFilter[0].stations.indexOf(body.stationid) < 0){
            listFilter[0].stations.push(body.stationid)
        }
    }else{
        list.push({
            openid:body.openid,
            stations:[
                body.stationid
            ]
        })
    }

    update("UserLikeStation",list)

    resp.json({
        code:1
    })
}


export const unLikeIt = async (req,resp) => {
    
    const {body} = req

    console.log(body)

    const list = get("UserLikeStation")

    const listFilter = list.filter(item => item.openid === body.openid) 
    if(listFilter.length >= 1){
        const idx = listFilter[0].stations.indexOf(body.stationid)
        if(idx >= 0){
            listFilter[0].stations.splice(idx,1)
        }
    }

    update("UserLikeStation",list)

    resp.json({
        code:1
    })
}

export const upload = async (req,resp) => {
    
    const {body} = req

    console.log(body)

    resp.json({
        code:1
    })
}

export const getUser = async (req,resp) => {
    
    const {body} = req

    // console.log(body)
    const userList = get("User")
    const userFilter = userList.filter( item => item.openid === body.openid)
    const user = userFilter[0]

    resp.json({
        code:1,
        data:{
            ...user,
            avatar:BASE_URL + user.avatar
        }
    })
}

export const updateUser = async (req,resp) => {
    
    const {body} = req

    console.log(body)
    try {
        const userList = get("User")
        const userFilter = userList.filter( item => item.openid === body.openid)
        userFilter[0].name = body.name
        userFilter[0].experience = body.experience
        userFilter[0].age = body.age
        userFilter[0].degree = body.degree

        update("User",userList)

        resp.json({
            code:1,
            msg:"更新成功",
        })
    } catch (error) {
        resp.json({
            code:2,
            msg:"更新失败",
        })
    }
}

export const uploadImage = async (req,resp) => {
    
    const {body,file} = req
    console.log(file,file.filename)
    console.log(body)

    const userList = get("User")
    const userFilter = userList.filter( item => item.openid === body.openid)
    if(userFilter.length > 0){
        // update 数据库
        const avatar = "imgs/" + file.filename
        userFilter[0].avatar = avatar
        update("User",userList)

        resp.json({
            code:1,
            data:{
                ...userFilter[0],
                avatar:BASE_URL + userFilter[0].avatar
            }
        })
    }else{
        resp.json({
            code:2,
            data:{},
            msg:"头像更新"
        })
    }
    
    
}

export const detail = async (req,resp) => {
    
    const {body} = req

    console.log(body)

    const data = {
        "id":"2",
        "station":"UI设计师",
        "salary":"12K-13K",
        "position":"北京",
        "experience":"应届",
        "degree":"本科",
        "welfare":[
            "五险一金",
            "年底双薪",
            "加班补助"
        ],
        "company":"北京新浪科技有限公司",
        "type":"full-time",
        "detail":`UI设计师是一位专门为网页、移动应用和其他数字平台创建用户界面的专业人员。他们需要深入理解用户需求和行为模式，并将这些信息转化为直观、易于操作的界面，使用户能够轻松地浏览和使用产品。

UI设计师的主要职责包括：
1. 深入了解用户需求和行为，制定用户体验设计方案；
2. 根据产品特点和品牌形象，设计网页、移动应用和其他数字平台的界面；
3. 为产品创建各种互动元素和功能模块，比如按钮、图标和动画效果；
4. 进行用户测试和反馈分析，并根据反馈把产品界面和体验不断优化；
5. 与开发团队协作，确保设计的可行性和最终上线效果。

UI设计师需要具备良好的设计眼光和创意思维能力，熟练掌握设计软件和工具，精通HTML、CSS等技术，能够有效跨部门协作和沟通。同时还需关注设计趋势和技术变化，保持对行业的理解和敏锐度。`,
        "intro":`新浪微博科技有限公司是一家中国的互联网科技公司，成立于2009年。公司总部位于北京市，并在上海、广州等城市设有分支机构。

        作为中国最具有影响力的社交平台之一，新浪微博致力于为用户提供互联网服务，包括社交媒体、微博、短视频等内容和应用。
        
        截至2021年，新浪微博已经拥有超过5亿的注册用户，其中包括政商娱乐等各行各业的知名人士和机构，覆盖范围相当广泛。
        
        新浪微博公司在业内一直保持着领先地位，他们不断地推出新功能以及提升用户体验，为用户提供高效、快捷、便利的社交服务。同时，公司还致力于打造一个支持多元文化和多元交流的社区，帮助社区成员更好地了解和共享彼此的思想和生活。`,
        hr:"张小姐"
    }


    // const userList = get("User")
    // const userFilter = userList.filter( item => item.openid === body.openid)
    // const user = userFilter[0]

    resp.json({
        code:1,
        data:data
    })
}
