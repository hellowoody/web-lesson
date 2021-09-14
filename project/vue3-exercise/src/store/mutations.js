export const mutations = {
    increment:function(state,p){
        state.count += p
        // state.count++
    },
    decrement(state){
        state.count--
    }
}