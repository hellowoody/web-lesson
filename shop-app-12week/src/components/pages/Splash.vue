<script setup>
import {ref,watch} from "vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import {setItem} from "@/kits/LocalStorageKit"

const router = useRouter()
const state = useState()
const count = ref(3);
// 倒计时
function cd(num){
    if(num > 0){
        console.log(num)
        setTimeout(() => {
            count.value = num - 1
            cd(count.value)
        },1000)
    } else {
        // state.setDirection("forward")
        // router.replace({path:"/main/home"})
    }
}
cd(count.value)
// 侦听页面何时跳转
watch(count,(curr) => {
    if(curr < 1){
        state.setDirection("forward")
        router.replace({path:"/main/home"})
    }
})
// 让本地缓存中的firstOpen 非空的，就代表用户不是"第一次"打开
setItem("firstOpen","1");
</script>
<template>
    <div class="root">
        <div class="cd">
            <span v-if="count > 0">{{count}}</span>
            <span v-else style="font-size:12px">跳转</span>
        </div>
        <h1>欢迎使用</h1>
    </div>
</template>

<style scoped>
.root {
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative
}

.cd {
    font-size:18px;
    position: absolute;
    top:10px;
    right:10px;
    color:rgb(0 0 0 / 0.5);
    width:36px;
    height:36px;
    border-radius: 50%;
    border:1px solid #B620E0;
    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 8px rgb(0 0 0 / 0.2);
}
</style>