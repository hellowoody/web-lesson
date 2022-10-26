import { defineStore } from "pinia";

export const useState = defineStore("counter",{
    state(){
        return {
            count:0
        }
    },
    actions:{
        increase(){
            this.count++
        },
        decrease(){
            this.count--
        }
    }
})