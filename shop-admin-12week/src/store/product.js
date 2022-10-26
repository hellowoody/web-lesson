import { defineStore } from "pinia"

export const useState = defineStore("product",{
    state:() => {
        return {
            selected:{}
        }
    },
    actions:{
        setSelected(product){
            this.selected = product
        }
    }
})