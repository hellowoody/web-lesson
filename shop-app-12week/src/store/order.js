import {defineStore} from "pinia"

export const useState = defineStore("order",{
    state:() => {
        return {
            orderDetail:{}
        }
    },
    actions:{
        setOrderDetail(orderDetail){
            this.orderDetail = orderDetail
        }
    },
    getters:{
        totalPrice(){
            return this.orderDetail.list.reduce((acc,item) => acc + parseFloat((item.price*item.count).toFixed(2)),0)
        },
        statusStyle(){
            return (statusId) => {
                const res = {}
                switch (statusId) {
                    case "1":
                        res.color = "#919100"
                        break;
                    case "2":
                        res.color = "red"
                        res.fontStyle = "italic"
                        res.textDecoration = "line-through"
                        res.opacity = "0.6"
                        break;
                    case "3":
                        res.color = "grey"
                        res.opacity = "0.6"
                        break;
                    case "4":
                        res.color = "pink"
                        break;
                    case "5":
                        res.color = "purple"
                        break;
                    default:
                        break;
                }
                return res
            }
        }
    }
})