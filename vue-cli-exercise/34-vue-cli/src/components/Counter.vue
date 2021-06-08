<template>
    <div>
        <div>计步器</div>
        <div>{{$store.state.count}}</div>
        <div>平方值：{{newval}}</div>
        <div>全局范围内平方值：{{$store.getters.globalNewVal}}</div>
        <a-button @click="increment">+</a-button>
        <a-button @click="decrement">-</a-button>
        <a-button @click="back">返回</a-button>
    </div>
</template>

<script>
export default {
    name:"Counter",
    methods:{
        increment(){
            // 出发vuex中mutation中的方法
            // this.$emit("add事件名字",p)  子调服父
            // this.$store.mutations.increment() error
            // this.$store.commit("mutation方法名字")
            this.$store.commit("increment",1000)
        },
        decrement(){
            this.$store.commit("decrement")
        },
        back(){
            this.$router.go("-1")
        }
    },
    // 计算属性 -》 被方法包裹的属性
    computed:{
        newval(){
            // return this.$store.state.count**2
            return this.$store.state.count*this.$store.state.count
        }
    }
}
</script>