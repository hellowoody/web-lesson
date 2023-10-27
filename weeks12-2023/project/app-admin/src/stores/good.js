import { defineStore } from "pinia"

export const useState = defineStore("good",{
    state:() => {
        return {
            selected:{},
            refreshCount:0
        }
    },
    actions:{
        setSelected(item){
            this.selected = item
        },
        refreshCountInc(){
            this.refreshCount++
        }
    }
})