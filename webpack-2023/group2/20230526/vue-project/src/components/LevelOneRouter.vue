<template>
    <h3>一级路由“占位符”</h3>
    <ul>
        <li>
            <router-link to="/">main</router-link>
        </li>
        <li>
            <router-link to="/a">A</router-link>
        </li>
        <li>
            <router-link to="/b">B</router-link>
        </li>
        <li>
            <router-link to="/c/u003/06">C</router-link>
        </li>
    </ul>
    <button @click="goto('/')">TO Main</button> 
    <button @click="goto('/a')">TO A</button> 
    <button @click="goto('/b')">TO B</button> 
    <hr>
        <router-link to="/a?id=1&name=zhang">A 传参 直接拼路径上</router-link>
        <button @click="goto('/a',{id:2,name:'li'})">A 传参 将参数作为query的值</button>
        <br>
        <router-link to="/d/u001/01">d 传参 直接拼路径上</router-link>
        <br>
        <button @click="gotoNameRoute('d',{userid:'u002',userstatus:'03'})">d 传参 将参数作为query的值</button>
        <br>
    <hr>
    <router-view></router-view>
</template>

<script setup>
import {useRoute,useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()

const goto = (path,query) => {
    router.push({
        path,
        query
    })
}
const gotoNameRoute = (name,params) => {
    router.push({
        name,
        params
    })
}


</script>