import {createStore} from "vuex";

export const store = createStore({
    state:{
        selectedGood:{}
    },
    mutations:{
        setSelectedGood(state,good){
            state.selectedGood = good
        }
    }
})