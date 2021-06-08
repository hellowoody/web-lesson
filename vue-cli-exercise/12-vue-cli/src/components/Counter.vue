<template>
    <div>
        <div>计步器:{{$store.state.count}}</div>
        <a-button @click="increment">+</a-button>
        <a-button @click="decrement">-</a-button>
        <br>
        <a-button @click="back">返回</a-button>
    </div>
</template>

<script>
export default {
    name:"Counter",
    methods:{
        increment(){
            // this.$store.mutations.add() 错误的
            this.$store.commit("add")
        },
        decrement(){
            this.$store.commit("sub")
        },
        back(){
            // this.$router.go(-1)
            this.$router.back()
        }
    }
}
</script>
