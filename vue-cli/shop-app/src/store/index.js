/*
全局变量控制
优点：一旦在state这个属性里声明，那么这个属性就能在整个项目里任何地方(*.vue)使用
注意：一旦页面刷新、关闭浏览器，甚至关机 ，那么在state里声明属性的值就清空了
*/
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        cartData: [],
        searchInput:"",
        goodCategory:"",
        selectedGood:{
            id:"",
            type:"",
        },
        selectedGoods:[]
    },
    //同步修改
    mutations:{
        pushCart(state,item){
            state.cartData.push(item)
        },
        increaseCart(state,index){  
            if(state.cartData[index].count < 99){
                state.cartData[index].count += 1
            }
        },
        decreaseCart(state,index){
            if(state.cartData[index].count > 0){
                state.cartData[index].count -= 1
            }
        },
        setSearchInput(state,newVal){
            state.searchInput = newVal
        },
        setGoodCategory(state,newVal){
            state.goodCategory = newVal
        },
        setSelectedGood(state,item){
            state.selectedGood = item
        },
        addSelectedGoods(state,item){
            state.selectedGoods.push(item)
        },
        popSelectedGoods(state){
            state.selectedGoods.pop()
        },
    },
    //异步修改
    actions:{

    },
    getters:{
        cartTotalPrice:(state)=>{
            let total = 0
            return "¥ " + state.cartData.reduce((acc,item)=>(acc+item.price*item.count),total)
        }
    }
})

export default store