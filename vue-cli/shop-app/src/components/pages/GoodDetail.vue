<template>
    <div>
        <top-bar>
            <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
            <div slot="middle">商品详情</div>
        </top-bar>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'

export default {
    name:"GoodDetail",
    components:{
        TopBar, 
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>