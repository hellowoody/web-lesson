import {defineStore} from "pinia"
import { mockFetch } from "@/kits/http"

export const useCounter = defineStore("counter",{
    // 类似于组件中可被绑定的变量 data
    // state(){
    //     return {
    //         count:0
    //     }
    // },
    state:() => ({ count:0 }),
    // 类似于组件中声明方法 methods
    // vuex 声明同步方法 mutations 声明异步方法 actions
    actions:{
        increase(newVal){
            this.count = newVal
        },
        decrease(newVal){
            this.count = newVal
        },
        // update(){
        //     mockFetch(Math.floor(Math.random()*10)).then((res) => {
        //         this.count = res
        //     })
        // }
        async update(){
            const res = await mockFetch(Math.floor(Math.random()*10))
            this.count = res
        }
    },
    // 类似于组件中的计算属性 computed
    getters:{
        sqrt(state){
            return state.count**2
        },
        unit(state){
            return (u) => {
                switch (u) {
                    case "ch":
                        return state.count + "￥"
                    case "us":
                        return state.count/10 + "$"
                    case "ja":
                        return state.count*20 + "￥"
                    default:
                        return "不支持该汇率"
                }
            }
        }
    }
})