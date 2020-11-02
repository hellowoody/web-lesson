<template>
    <template v-for="item in 20" :key="item">
        <div class="menu-item">菜单{{item}}</div>
    </template>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style scoped>
.menu-item {
    width:100%;
    height:50px;
    display:flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 1px 2px 8px rgb(0 0 0 /0.1);
    margin-bottom: 6px;
    padding-left:16px;
}
</style>