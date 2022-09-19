import {createStore} from "vuex";


export const vuex_store = createStore({
    state:function(){
        return {
            count:10
        }
    },
    mutations:{
        increase(state){
            state.count++
        },
        decrease(state){
            state.count--
        },
    }
})