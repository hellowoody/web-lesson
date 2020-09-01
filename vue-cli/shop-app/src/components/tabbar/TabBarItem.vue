<template>
    <div class="tab-bar-item" >
        <slot name="icon">
            <div :class="icon" style="font-size:19px;"></div>
        </slot>
        <div style="font-size:14px;margin-top:6px;">{{name}}</div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        name:{
            type:String,
            default:"我的"
        },
        icon:{
            type:String,
            default:'iconfont icon-orderselect',
        },
    },
}
</script>

<style scoped>
.tab-bar-item {
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>