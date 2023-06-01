import {defineStore} from "pinia"
import {mockFetch} from "@/kits/http"

export const useCounter = defineStore("s",{
    // 类似组件中定义可被绑定的变量data
    // state(){
    //     return {
    //         num:100
    //     }
    // },
    state:() => ({ num:100 }),
    // 类似组件中定义方法的属性methods
    // vuex 声明同步方法的属性 mutations 声明异步方法的属性 actions ,
    // pinia 声明同步和异步方法 都是actions
    actions:{
        inc(){
            this.num++
        },
        dec(){
            this.num--
        },
        // update(){
        //     mockFetch(Math.floor(Math.random()*20)).then((res) => {
        //         this.num = res
        //     })
        // },
        async update(){
            const res = await mockFetch(Math.floor(Math.random()*20))
            this.num = res
        }
    },
    // 类似组件中定义计算属性computed,
    getters:{
        sqrt(state){
            return state.num**2
        },
        unit(state){
            return (country) => {
                switch (country) {
                    case "ch":
                        return state.num+"￥"
                    case "us":
                        return state.num/10+"$"
                    case "ja":
                        return state.num*20+"￥"
                    default:
                        return "不支持该汇率"
                }
            }
        }
    }
})