// const state1 = () => ({
//     direction:""
// })

const state = () => {
    /*
        forward:   跳转到下一个页面，从一级页面向二级页面跳,可以理解为打仗作战时前进
        backward： 返回上一个页面
    */
    return {
        direction:""   //  “” ｜ forward | backward
    }
};

const mutations = {
    setDirection(state,newVal){
        state.direction = newVal
    }
}

export default {
    namespaced:true,    // !!! 需要设置为true
    state,
    mutations
}