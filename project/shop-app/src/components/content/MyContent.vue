<script setup>
const props = defineProps({
    hasTabBar:Boolean // true 一级页面 | false 非一级页面
})

const topbar_height = 60;
const tabbar_height = 58;
// sub_xxx 待减数
const sub_height = props.hasTabBar ? topbar_height + tabbar_height + "px" : topbar_height + "px"

</script>

<template>
    <div class="my-content">
        <slot></slot>
    </div>
</template>

<style scoped>
.my-content {
    padding:24px;
    box-sizing:border-box;
    overflow-x: hidden;
    height: calc(100vh - v-bind(sub_height));
}
</style>