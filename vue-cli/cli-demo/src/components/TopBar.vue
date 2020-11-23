<template>
    <div class="top-bar">
        <slot></slot>
        <input class="search-input" v-model="searchInput" placeholder="输入你关心的内容"/>
        <button @click="search">搜索</button>
    </div>
</template>

<script>

export default {
    name:"TopBar",
    data(){
        return {
            searchInput:"",
        }
    },
    methods:{
        search(){
            console.log("this is search btn")
            this.$emit("searchHandle")
        }
    }
}

</script>

<style>
.top-bar {
    background-color: #9267fd;
    height: 60px;
    box-shadow: 0px 1px 2px rgb(40 40 40 / 0.2);
    display: flex;
    padding: 12px 16px;
    box-sizing: border-box;
    justify-content: space-between;
}

.search-input {
    width: 70%;
}
</style>