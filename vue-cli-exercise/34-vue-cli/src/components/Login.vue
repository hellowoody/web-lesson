<template>
    <div>
        <h1>登陆</h1>
        <div>{{$store.state.count}}</div>
        <div>全局范围内平方值：{{$store.getters.globalNewVal}}</div>
        <a-button @click="increment">+</a-button>
        <a-button @click="decrement">-</a-button>
        <a-button @click="back">返回</a-button>
    </div>
</template>

<script>
export default {
    name:"Login",
    methods:{
        increment(){
            // 出发vuex中mutation中的方法
            // this.$emit("add事件名字",p)  子调服父
            // this.$store.mutations.increment() error
            // this.$store.commit("mutation方法名字")
            this.$store.commit("increment")
        },
        decrement(){
            this.$store.commit("decrement")
        },
        back(){
            this.$router.go(-1)
            // this.$router.forward()
            // this.$router.back()
        }
    }
}
</script>