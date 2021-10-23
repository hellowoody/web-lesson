const state = () => ({
    cartData:[],
})

const mutations = {
    pushCart(state,item) {
        state.cartData.push(item)
    },
    increaseCart(state,index) {
        state.cartData[index].countbuy += 1
    },
    decreaseCart(state,index) {
        state.cartData[index].countbuy -= 1
    },
    removeCart(state,index){
        if(state.cartData[index].countbuy === 0){
            state.cartData.splice(index,1)
        }
    }
}

const actions = {
    pushCart(context,item){
        let index = -1
        for(let i = 0 ; i < context.state.cartData.length ; i++){
            if(context.state.cartData[i].id === item.id){
                index = i
                break;
            }
        }
        if(index > -1){
            return actions.addCart(context,index)
        }else{
            context.commit("pushCart",item)
            return true
        }
    },
    addCart(context,index){
        /*
            1.因为正式的商城项目的购物车商品数量的增减是需要和后台做请求，也就是说需要跟新数据库，这么做的目的支持多设备的数据库同步
            2.我们这个项目购物车没有存数据库，但是我们调用全局状态管理vuex方法时，可以像调用网络请求那样做，也就是调用actions的方法
            3.actions定义的方法可以有返回值，但是mutations定义的方法没有返回值，所有更加促使我们调用actions
            4.我们可以在.vue文件也就是组件页面中拿到actions的返回值，做数量上限和下限的校验
        */ 
        if(context.state.cartData[index].countbuy < 99){
            context.commit("increaseCart",index)
            return true
        }else{
            return false
        }
    },
    subCart(context,index){
        context.commit("decreaseCart",index)
        context.commit("removeCart",index)  
    },
    order(context){
        console.log(1000000)
        /*
            1.定义一个参数对象
            2.带着参数访问后台创建订单的接口 /createorder
            3.清空购物车
        */ 
    }
}

const getters = {
    cartTotalPrice(state){
        let total = 0
        return  "¥ " + state.cartData.reduce((acc,item) => {
            return acc + item.price * item.countbuy
        },total)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}