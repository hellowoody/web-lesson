import {createStore} from 'vuex';

export const store = createStore({
    state:{
      count: 1
    },
    mutations:{
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      }
    }
})