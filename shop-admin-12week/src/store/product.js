import { defineStore } from "pinia"

export const useState = defineStore("product",{
    state:() => {
        return {
            selected:{},
            refreshCount:0,
        }
    },
    actions:{
        setSelected(product){
            this.selected = product
        },
        refreshCountAdd(){
            this.refreshCount++
        }
    }
})