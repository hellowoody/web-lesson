import { defineStore } from "pinia"


export const useUser = defineStore("user",{
    state(){
        return {
            userId:""
        }
    },
    actions:{
        setUserId(v){
            this.userId = v
        }
    }
})