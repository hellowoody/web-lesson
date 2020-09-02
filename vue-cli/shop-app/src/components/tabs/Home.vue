<template>
    <div>
        <top-bar>
            <div slot="middle">中间的搜索框</div>
            <div slot="right" class="iconfont icon-gouwuchezhengpin" style="font-size: 24px"></div>
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
    }
}
</script>