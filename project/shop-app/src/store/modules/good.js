const state = () => ({
    cartData:[],
})

const mutations = {
    pushCart(state,item) {
        let index = -1
        for(let i = 0 ; i < state.cartData.length ; i++){
            if(state.cartData[i].id === item.id){
                index = i
                break;
            }
        }
        if(index > -1){
            mutations.increaseCart(state,index)
        }else{
            state.cartData.push(item)
        }
    },
    increaseCart(state,index){
        if(state.cartData[index].countbuy < 99){
            state.cartData[index].countbuy += 1
        }
    }
}

export default {
    namespaced:true,
    state,
    mutations
}