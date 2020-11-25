import {createStore} from 'vuex'

export const store = createStore({
    state(){
        return {
            count:0
        }
    },
    mutations:{
        add(state){
            state.count++
        },
        sub(state){
            state.count--
        }
    }
})