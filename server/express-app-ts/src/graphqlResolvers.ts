
import {Do,FindFrist} from './mysql'

export const good = async (parent:any,args:any,context:any,info:any)=>{
    try {
        let res = await FindFrist("select * from goods where id = ? ",[args.id])
        return res
    } catch (e) {
        return e
    }
}

export const goodtype = async (parent:any,args:any,context:any,info:any)=>{
    try {
        let res = await FindFrist("select * from dict_son where id = ? ",[parent.type])
        return res
    } catch (e) {
        return e
    }
}

export const goods = ()=>{}