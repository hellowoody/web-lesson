<script setup>
import { ref, watch } from 'vue';
import {useRoute,useRouter} from "vue-router"


const menus = [
    {
        // 下面的构造菜单 是按照你个人的使用习惯定义的
        key:"good",
        name:"商品管理",
        icon:"iconfont icon-shangpinfenlei",
        menus:[
            {
                key:"goodmanagement",
                name:"商品列表",
                path:"/main/storemanagment"
            },
            {
                key:"goodstore",
                name:"商品库存",
                path:"/main/storemanagment"
            },
        ]
    }
]
let openKey = "";
const route = useRoute()
const router = useRouter()
// console.log(route)
/*
    双层循环
    1.先拿到当前浏览器地址栏上的url(通过route.path)
    2.对大menus进行两层循环，目的是找到激活菜单的路径路径
*/
for(let t1 of menus){
    for(let t2 of t1.menus){
        if(t2.key === route.name){
            openKey = t1.key
            break;
        }
    }
}
const selectedKeys = ref([route.name])
const openKeys = ref([openKey])

const goto = (path) => router.push({path})

</script>

<template>
    <a-menu
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        mode="inline"
    >
        <a-menu-item key="home" @click="goto('/main/home')">
            <span class="menus-icon iconfont icon-shouye"></span>
            <span>首页</span>
        </a-menu-item>
        <a-sub-menu v-for="item in menus" :key="item.key" >
            <template #icon><span :class="item.icon"></span></template>
            <template #title><span>{{item.name}}</span></template>
            <a-menu-item v-for="t in item.menus" :key="t.key" @click="goto(t.path)">
                <span class="menus-icon iconfont icon-shenghuoyongpin"></span>
                <span>{{t.name}}</span>
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<style>
.menus-icon {
    margin-right:8px
}

.ant-menu-sub.ant-menu-inline {
    background-color:unset !important;
}
</style>