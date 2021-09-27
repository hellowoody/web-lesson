<script setup>
import {ref,watch} from "vue";
import {useRoute} from "vue-router";

const transitionName = ref("");
const route = useRoute();

// console.log(route)
// watch(_,_) 侦听是简单对象 还是 引用对象？
// watch route
watch(() => route.path ,(to,from) => {
  console.log(to,from)
  if(to.indexOf("/main/") >= 0 && from.indexOf("/main/") >=0 ){
    transitionName.value = "";
  }else{
    transitionName.value = "fold-left";
    /*
    if(){
      transitionName="前进" v fold-left  (enter leave)
    }else{
      transitionName=“后退” v fold-right (enter leave)
    }
    */ 
  } 
})
</script>
<template>
  <router-view v-slot="{ Component,route }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
/* 把iconfont导入进来 */
@import "@/assets/iconfont/iconfont.css";

.fold-left-enter-active {
  position:fixed;
  height: 100vh;
  width: 100vh;
  animation-name: fold-left-in;
  animation-duration: 0.5s;
}

.fold-left-leave-active {
  position: fixed;
  height: 100vh;
  width: 100vh;
  animation-name: fold-left-out;
  animation-duration: 0.5s;
}

@keyframes fold-left-in {
  0% {
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0);
  }
  100% {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }
}
</style>