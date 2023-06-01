<template>
    <ul >
        <li><router-link to="/">默认页面</router-link></li>
        <li><router-link to="/home?userId=u001&name=张三">首页页面</router-link></li>
        <li><button @click="goto('/home',{userId:'u001',name:'张三'})">首页页面</button></li>
        <!-- <li><a href="javascript:void(0);" @click="goto('/order')">订单页面</a></li> -->
        <li><a href="#" @click.prevent="gotoByName('order',{orderId:'o01',status:'06'})">订单页面</a></li>
        <li><router-link v-bind:to="{name:'order',params:{orderId:'o01',status:'06'}}">默认页面</router-link></li>
        <li><a href="#" @click.prevent="goto('/profile')">个人页面</a></li>
    </ul>
</template>

<script setup>
import {useRouter} from "vue-router"

const router = useRouter()

const goto = (path,query) => {

    // js 事件传递：捕获事件，冒泡事件
    // js 阻止事件传递：stopPropagation()
    // js 阻止默认事件发生：event.preventDefault()

    router.push({
        path,
        query
    })
}


const gotoByName = (name,params) => {
    router.push({
        name,
        params
    })
}
</script>
