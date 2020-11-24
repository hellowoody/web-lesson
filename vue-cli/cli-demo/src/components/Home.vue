<template>
    <top-bar>
        <template v-slot:right>
            <button @click="goSearch">搜索</button>
        </template>
    </top-bar>
  <h1>this is home page</h1>
</template>

<script>
import TopBar from '@/components/TopBar.vue'

export default {
    name:"Home",
    components:{
        TopBar
    },
    methods:{
        goSearch(){
            this.$router.push("/search")
        }
    }
}
</script>

<style>

</style>