<template>
    <div>
        <h1>登陆</h1>
        <div>计步器：{{$store.state.count}}</div>
        <a-button @click="back">返回</a-button>
        <!-- 二级路由占位符 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Login",
    methods:{
        back(){
            this.$router.go(-1)
            // this.$router.back()
            // this.$router.forward()
        }
    }
}
</script>