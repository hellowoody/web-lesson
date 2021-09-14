const state = () => {
    return {
         count:3,
    }
}

const mutations = {
    add(state){
        state.count += 2
    },
    sub(state){
        state.count -= 2
    }   
}

export default {
    state,
    mutations,
    namespaced:true, // 这个选项是为了让本子模块中的mutation,action,getter方法独立，跟其他的子模块互不干扰
}