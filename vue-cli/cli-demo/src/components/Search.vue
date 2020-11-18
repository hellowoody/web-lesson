<template>
  <h1>this is seacrh page</h1>
  <button @click="back">返回上一页</button>
</template>

<script>
export default {
    name:"Search",
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>