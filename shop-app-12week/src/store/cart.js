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
            return restHttp("/api/addcart",p).then((res) => {
                if(res.code === 1){
                    this.cart.forEach(item => {
                        if(item.id === p.good.id){
                            if(p.ifIncrease){
                                item.count++
                            }else{
                                item.count--
                            }
                        }
                    })
                }

                return res
            })
        },
        async getCart(userId){
            const p = {
                // 这里的token和userId的目的是让gql的checkToken方法返回true
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
                this.cart = res.data.cart.map(item => {
                    item.checked = false;
                    return item
                })
                return {
                    code:"ok",
                    data:res.data.cart,
                    msg:""
                }
            } catch(e){
                return {
                    code:"fail",
                    msg:e.message,
                    data:{}
                }
            }
        },
        async createOrder(){
            const token = getItem("token")
            const userId = getItem("userId")
            const cartChecked = this.cart.filter(item => item.checked) 
            const p = {
                token,
                userId,
                order:{
                    userId,
                    status:"1",
                    list:cartChecked.map(item => {
                        delete item.checked
                        return item
                    })
                }
            }
            const res = await restHttp("/api/createorder",p)
            if(res.code === 1){
                const removeCartRes = await restHttp("/api/removecart",{
                    userId,
                    token,
                    cart:cartChecked
                })
                if(removeCartRes.code === 1){
                    this.cart = this.cart.filter(item => {
                        for(const c of cartChecked){
                            if(item.id === c.id){
                                return false
                            }
                        }
                        return true
                    })
                } 
            }
            return res
        }
    },
    getters:{
        totalPrice(){
            return this.cart.filter(item => item.checked).reduce((acc,item) => {
                return acc + parseFloat((item.price*item.count).toFixed(2))
            },0)
        }
    }
})