import {defineStore} from "pinia"


export const useUser = defineStore("user",{
    state(){
        return {
            userId:""
        }
    },
    actions:{
        login(v){
            this.userId = v
        }
    }
})