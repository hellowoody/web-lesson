import {get} from "./db/db.js"

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

export const HomeTopList = (req,resp) => {
    try {
        const list = get("homeTopList")
        resp.send(list)
    } catch (e) {
        resp.status(500).send(e.message)
    }
}


