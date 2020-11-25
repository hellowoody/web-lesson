<template>
    <top-bar @focusHandle="goSearch" >
        <template v-slot:right>
            <button @click="goSearch">搜索</button>
        </template>
    </top-bar>
  <h1>this is home page</h1>
    计数器:{{count}}
    <button @click="increase">+</button>
    <button v-on:click="decrease">-</button>
    <hr>
    全局计数器:{{$store.state.count}}
    <button @click="increaseG">+</button>
    <button v-on:click="decreaseG">-</button>
</template>

<script>
import TopBar from '@/components/TopBar.vue'

export default {
    name:"Home",
    data(){
        return {
            count:0
        }
    },
    components:{
        TopBar
    },
    methods:{
        goSearch(){
            this.$router.push("/search")
        },
        increase(){
            this.count++
        },
        decrease(){
            this.count--
        },
        increaseG(){
            this.$store.commit("add")
        },
        decreaseG(){
            this.$store.commit("sub")
        }
    }
}
</script>

<style>

</style>