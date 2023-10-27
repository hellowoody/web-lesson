<template>
     <a-menu
        id="menus"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 300px"
        mode="inline"
    >
        <template v-for="menu in menus">
            <a-menu-item v-if="menu.menus.length < 1" :key="menu.key" @click="goto(menu.path)">
                <span>{{ menu.name }}</span>
            </a-menu-item>
            <a-sub-menu v-if="menu.menus.length > 0" :key="menu.key">
                <template #title>{{ menu.name }}</template>
                <a-menu-item v-for="item in menu.menus" :key="item.key"  @click="goto(item.path)">
                    <span>{{ item.name }}</span>
                </a-menu-item>
            </a-sub-menu>
        </template>
    </a-menu>
</template>
<script setup>
import { ref } from "vue"
import { useRouter,useRoute } from "vue-router"

const menus = [
    {
        key:"home",
        name:"首页",
        path:"/main/home",
        menus:[]
    },
    {
        key:"good",
        name:"商品管理",
        menus:[
            {
                key:"goodmanagment",
                name:"商品列表",
                path:"/main/goodmanagment",
            },
            {
                key:"goodmanagment2",
                name:"商品列表2",
                path:"/main/goodmanagment",
            }
        ]
    },
]
const router = useRouter()
const route = useRoute()

const selectedKeys = ref([route.name])

let activeOpenKey = ""
for(const t1 of menus){
    for(const t2 of t1.menus){
        if(t2.key === route.name){
            activeOpenKey = t1.key
            console.log("============",t1.key)
            break;
        }
    }
}

const openKeys = ref(["good"])

const goto = path => router.push({path})
</script>