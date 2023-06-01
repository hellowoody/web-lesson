import {defineStore} from "pinia"

export const stepStore = defineStore("step",{
    // data
    state(){
        return {
            num:10
        }
    },
    // methods
    actions:{
        increase(){
            this.num++
        },
        decrease(){
            this.num--
        },
    }
})