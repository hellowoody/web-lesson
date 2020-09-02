<template>
    <div>
        <top-bar>
            <div slot="middle">
                <a-input prefix="￥" suffix="RMB" />
            </div>
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