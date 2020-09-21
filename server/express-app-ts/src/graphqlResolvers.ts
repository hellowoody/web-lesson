
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

export const goods = async (parent:any,args:any,context:any,info:any)=>{
    try {

        let sql = "select * from goods where 1=1 ";
        sql += args.type ? " and type = '"+args.type+"' " : "" ;
        sql += args.name ? " and name like '%"+args.name+"%' " : "";
        sql += args.desc ? " and gooddesc like '%"+args.desc+"%' " : "";
        sql += " limit ? " ;
        let res = await Do(sql,[args.count])
        return res
    } catch (e) {
        return e
    }
}