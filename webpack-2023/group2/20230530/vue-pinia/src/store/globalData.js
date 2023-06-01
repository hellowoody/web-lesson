import {defineStore} from "pinia"

export const globalStore = defineStore("globalData",{
    state(){
        return {
            logo:"xxx",
        }
    }
})