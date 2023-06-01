import {defineStore} from "pinia"

export const userStore = defineStore("user",{
    state(){
        return {
            name:"zhang",
            role:"employee"
        }
    }
})