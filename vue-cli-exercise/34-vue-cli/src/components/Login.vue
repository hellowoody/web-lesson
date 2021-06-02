<template>
    <div>
        <h1>登陆</h1>
        <a-button @click="back">返回</a-button>
    </div>
</template>

<script>
export default {
    name:"Login",
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>