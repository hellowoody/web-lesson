<script setup>
import {useRouter} from "vue-router"
import { DownOutlined } from '@ant-design/icons-vue';
const router = useRouter()

const goto = () => {
    router.push({
        path:"/login"
    })  
}

</script>

<template>
    <div class="root">
        <div style="font-weight: bold;">十二周后台管理系统</div>
        <a-dropdown>
            <a class="ant-dropdown-link more" @click.prevent>更多 <down-outlined /></a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                        <div class="menu-item"><span class="iconfont icon-hanhan-01-01"></span>张三</div>
                    </a-menu-item>
                    <a-menu-item>
                        <div class="menu-item"><span class="iconfont icon-shezhi"></span>设置</div>
                    </a-menu-item>
                    <a-menu-item @click="goto">
                        <div class="menu-item"><span class="iconfont icon-tubiaozhizuomoban-"></span>登出</div>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
</template>

<style scoped>
.root {
    display:flex;
    padding:0px 24px;
    justify-content: space-between;
    width:100%;
}

.more {
    font-size:13px;
}

.menu-item {
    display:flex;
    justify-content:space-between;
    padding:0px 3px;
    width:65px ;
}
</style>