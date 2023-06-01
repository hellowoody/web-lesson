<template>
    <ul>
        <li><router-link to="/home">首页</router-link></li>
        <li>
            <router-link to="/order">订单</router-link>
            <ul>
                <li><router-link to="/order/list?limit=10&name=显卡">列表</router-link></li>
                <li><a href="#" @click.prevent="goto('/order/list',{limit:5,name:'洗发水'})">列表</a></li>
                <li><a href="#" @click.prevent="gotoByName('orderedit',{orderId:'O001',price:'100.00'})">编辑</a></li>
                <li><router-link :to="{name:'orderedit',params:{orderId:'O002',price:'50.00'}}">编辑</router-link></li>
            </ul>
        </li>
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
    router.push({
        name,
        params
    })
}
</script>