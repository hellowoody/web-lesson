import { defineStore } from "pinia"
import { post,gql } from "@/kits/fetch"

export const useState = defineStore("cart",{
    state:()=>({
        cart:[],
        count:0
    }),
    // vuex 处理同步方法的mutation 处理异步方法（网络请求）的action
    // pinia actions既可以处理同步方法也可以处理异步方法
    // pinia actions 的方法必须有return 
    actions:{
        modify(p){
            return post("/modifycart",p).then((res) => {
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
        delOne(p){
            return post("/removeitemcart",p).then((res) => {
                if(res.code === 1){
                    this.cart = this.cart.filter(item => item.id !== p.id)
                }
                return res
            })
        },
        delAll(){

        },
        async getCart(userId,token){
            const p = {
                token,
                userId,
                query:`
                    {
                        cart(userId:"${userId}") {
                            id
                            name
                            price
                            count
                            imgpath
                        }
                    }
                `
            }

            try {
                const res = await gql(p)
                if(res.data.cart){
                    this.cart = res.data.cart.map(item => {
                        item.checked = false
                        return item
                    })
                }
                return res
            } catch (e) {
                console.log(e)
                return e
            }
        },
        async createOrder(userId,token,checkedCart){
            try {
                const p = {
                    token,
                    userId,
                    order:{
                        userId,
                        status:"01",
                        list:checkedCart.map(item => {
                            delete item.checked
                            return item
                        })
                    }
                } 
                const res = await post("/createorder",p)
                if(res.code === 1){
                    const removeCartRes = await post("/removebatchcart",{
                        userId,
                        token,
                        cart:checkedCart
                    })
                    if(removeCartRes.code === 1){
                        this.cart = this.cart.filter(item => {
                            for(const c of checkedCart){
                                if(c.id === item.id){
                                    return false
                                }
                            }
                            return true
                        })
                    }    
                }
                return res
            } catch (e) {
                return e
            }
        }
    },
    // pinia 里的计算属性
    getters:{
        totalPrice(){
            return this.cart
                    .filter(item => item.checked)
                    .reduce((acc,item) => acc + parseFloat((item.price * item.count).toFixed(2)),0)
        }
    }
}) 