<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const back = () => {
    router.go(-1)
}

</script>
<template>
    <a-button @click="back">返回</a-button>
    <hr>
    <h2>{{$store.state.count}}</h2>
    <store-count-01 />
    <hr>
    <ul>
        <li><router-link to="/e03/c02">全局module02</router-link></li>
        <li><router-link to="/e03/c03">全局module03</router-link></li>
    </ul>
    <router-view></router-view>
</template>