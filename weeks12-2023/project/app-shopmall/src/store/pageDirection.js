import {defineStore} from "pinia"

export const useState = defineStore("pageDirection",{
    state:()=> {
        return {
            direction: "",
        }
    },
    actions:{
        setDirection(newVal){
            this.direction = newVal
        }
    }
})