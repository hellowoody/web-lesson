import {defineStore} from "pinia"

export const useState = defineStore("counter",{
    // state:function(){
    //     return {
    //         step:-10
    //     }
    // }
    state:() => ({step:-10,name:"zhang",province:"tianjin"}),
    actions:{
        increase:function(){
            this.step++
        },
        decrease(){
            this.step--
        }
    }
})