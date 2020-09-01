<template>
    <div @click="doAcitve" class="tab-bar-item" :style="activeStyle">
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
        activeColor:{
            type:String,
            default:'#B620E0'
        },
        path:String,
    },
    data(){
        return {
            isActive:false
        }
    },
    methods:{
        doAcitve(){
            if (this.$route.path != this.path) {
                this.$router.replace({path:this.path})
            }
        }
    },
    computed:{
        activeStyle(){
            return this.$route.path.indexOf(this.path) > -1 ? {color:'#B620E0'} : null
        }
    }
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