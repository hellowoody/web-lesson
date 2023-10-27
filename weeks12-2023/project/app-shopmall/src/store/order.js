import { defineStore } from "pinia"

export const useState = defineStore("order",{
    state: () => {
        return {
            detail:{}
        }
    },
    actions:{
        setDetail(item){
            this.detail = item
        }
    },
    getters:{
        totalPrice(){
            return "￥" + this.detail.list.reduce((acc,v) => acc + v.price*v.count,0)
        },
        statusStyle(){
            const styl = {}
            switch (this.detail.status) {
                case "01":
                    styl.color = "#919100"
                    break;
                case "02":
                    styl.color = "red"
                    styl.fontStyle = "italic"
                    styl.textDecoration = "line-through"
                    styl.opacity = "0.6"
                    break;
                case "03":
                    styl.color = "grey"
                    styl.opacity = "0.6"
                    break;
                case "04":
                    styl.color = "pink"
                    break;
                case "05":
                    
                    break;
                case "06":
                    
                    break;
                case "07":
                    
                    break;
                default:
                    break;
            }
            return styl
        }
    }
})