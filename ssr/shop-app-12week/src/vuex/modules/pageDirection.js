const state = () => {
    return {
        direction:""  //  "" | forward | backward
    }
}

const mutations = {
    setDirection(state,newVal){
        state.direction = newVal
    }
}


export default {
    namespaced:true, // !!! 设置为true
    state,
    mutations
}