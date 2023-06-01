<template>
    <ul>
        <li><router-link to="/">根路径</router-link></li>
        <li><button @click="goto('/home')">首页路径</button></li>
        <li><a href="#" @click.prevent="goto('/order')">订单路径</a></li>
        <li><a href="#" @click.prevent="replace('/order')">订单路径(替换)</a></li>
        <li><router-link to="/order?orderid=O001&status=02">订单路径(参数)</router-link></li>
        <li><a href="#" @click.prevent="goto('/order',{orderid: 'O002', status: '03'})">订单路径(参数2)</a></li>
        <li><a href="#" @click.prevent="goto('/profile')">个人信息 path</a></li>
        <li><a href="#" @click.prevent="gotoByName('profile',{userid: 'U001',pwd:'123'})">个人信息 name</a></li>
        <li><a href="#" @click.prevent="gotoByName('abc',{userid: 'U002',pwd:'123456'})">ABC</a></li>
    </ul>
</template>
<script setup>
import {useRouter} from "vue-router"

const router = useRouter()

const goto = (path,query) => {
    router.push({
        path,
        query
    })
}
const gotoByName = (name,params) => {
    // http://localhost:5173/#/profile/U001/123
    router.push({
        name,
        params
    })
}
const replace = (path) => {
    router.replace({
        path
    })
}
</script>