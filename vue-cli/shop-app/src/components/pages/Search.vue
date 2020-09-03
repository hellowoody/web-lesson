<template>
    <div>
        <top-bar>
            <div @click="back" slot="left" class="iconfont icon-back1" style="font-size:24px" ></div>
        </top-bar>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'

export default {
    name:"Search",
    components:{
        TopBar
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>