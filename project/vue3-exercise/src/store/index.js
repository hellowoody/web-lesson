import { createStore } from "vuex";

export const store = createStore({
    state:function(){
        return {
            count:10
        }
    },
    // 同步
    mutations:{
        increment:function(state,p){
            state.count += p
            // state.count++
        },
        decrement(state){
            state.count--
        }
    },
    // 异步
    actions:{
        incrementDelay:(context) => {
            // 模拟网络延迟 
            // pending
            // fullxxx -> resolve
            // rejected -> reject
            new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve()
                }, 2000);
            }).then(() => {
                context.commit("increment",3)
                // context.state.count = context.state.count + 3 // 不能这么写，虽然控制台没有抛错，因为全局状态追踪会产生问题，用chrome插件查看会更直观
            })
        },
        decrementDelay:({commit}) => {
            new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve()
                }, 2000);
            }).then(() => {
                commit("decrement")
            })
        }
    },
    // 全局状态中的计算属性
    getters:{
        countSquare(state){
            return state.count * state.count
        },
    }
})