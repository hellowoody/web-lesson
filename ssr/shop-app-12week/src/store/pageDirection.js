import {defineStore} from "pinia"

export const useState = defineStore("pageDirection",{
    state:() => ({direction:""}),
    actions:{
        setDirection(newVal){
            // console.log("pinia : ",newVal)
            this.direction = newVal
        }
    }
})