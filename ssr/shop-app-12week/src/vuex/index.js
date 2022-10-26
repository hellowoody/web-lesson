import {createStore} from "vuex";
import pageDirection from "./modules/pageDirection.js"

export const store = createStore({
    modules:{
        pageDirection
    },
    state:function(){
        return {
            count:100,
        }
    },
    mutations:{
        increase(state){
            state.count++
        },
        decrease(state){
            state.count--
        },
    },
    // actions处理异步
    // 在actions里再次调用mutations中的同步方法
    actions:{

    },
    // 全局状态下的计算属性
    getters:{

    }
})