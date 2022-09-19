import {defineStore} from "pinia"

export const useState = defineStore("counterOptions",{
    state:() => ({count:-10}),
    actions:{
        increase(){
            this.count++
        },
        decrease(){
            this.count--
        }
    },
    getters:{
        square(state){
            return state.count**2
        },
        oppositeSquare(){
            return this.square*-1
        }
    }
})