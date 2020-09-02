<template>
    <div>
        <top-bar>
            <div slot="right" @click="goto('/cart')" class="iconfont icon-gouwuchezhengpin" style="font-size: 24px"></div>
        </top-bar>
        <div>this is A Page</div>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'

export default {
    name:'A',
    components:{
        TopBar,
    },
    methods:{
        goto(path){
            this.$router.push({path})
        }
    }
}
</script>

<style>

</style>