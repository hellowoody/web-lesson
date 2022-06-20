import {get} from "./db/db.js"

export const DefaultApi = (req,resp) => resp.send("hello four-week-server of Node.js !")

export const QueryFood = (req,resp) => {
    try {
        const list = get("food")
        const params = req.body
        const filter_array = list.filter(item => item.name.indexOf(params.keyword) >= 0 ? true : false)
        resp.send(filter_array)
    } catch (e) {
        resp.status(500).send(e.message)
    }
}
