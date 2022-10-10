import {defineStore} from "pinia"
import { gql,restHttp } from "@/kits/HttpKit"
import { getItem } from "@/kits/LocalStorageKit"

export const useState = defineStore("cart",{
    state:() => {
        return {
            cart:[]
        }
    },
    actions:{
        addCart(p){
            return restHttp("/api/addcart",p)
        },
        async getCart(userId){
            const p = {
                token:getItem("token"),
                userId,
                query:`
                    {
                        cart (userId:"${userId}") {
                            id
                            name
                            price
                            imgpath
                            count
                        }
                    }
                `
            }
        
            try {
                const res = await gql(p);
                return {
                    code:1,
                    data:res.data.cart,
                    msg:""
                }
            } catch(e){
                return {
                    code:2,
                    msg:e.message,
                    data:{}
                }
            }
        }
    }
})