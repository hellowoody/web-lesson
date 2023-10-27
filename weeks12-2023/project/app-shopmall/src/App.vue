<template>
  <!-- 一级路由入口 “占位符” -->
   <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#B620E0',
      }
    }"
  >
    <router-view v-slot="{Component}">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </a-config-provider>
  
</template>

<script setup>
import {watch,ref} from "vue"
import {useRoute} from "vue-router"
import {useState} from "@/store/pageDirection.js"

const state = useState()
const route = useRoute()
const transitionName = ref("") // fold-left or fold-right
// route.path
watch(() => route.path,(curr,prev) => {
  if(curr.indexOf("/main/") >= 0 && prev.indexOf("/main/") >= 0){
    state.direction = ""
    transitionName.value = "" 
  }else{
    // console.log("curr",curr,"prev",prev)
    // pinia if -> or <-
    // console.log("state.direction",state.direction)
    if(state.direction === "forward"){
      transitionName.value = "fold-left" 
    }else{
      transitionName.value = "fold-right" 
    }
  }
})
</script>

<style>
@import "./assets/iconfont/iconfont.css";

body {
  margin:0;
  overflow: hidden;
}

.fold-left-enter-active {
  position: fixed;
  height:100vh;
  width:100vw;
  animation-name:fold-left-in;
  animation-duration: 0.3s;
} 

@keyframes fold-left-in {
  0% { 
    transform: translate(100%,0); 
    /* transform: translateX(100%);  */
  }
  100%{
    transform: translate(0%,0); 
    /* transform: translateX(0%);  */
  }
}

.fold-right-enter-active {
  position: fixed;
  height:100vh;
  width:100vw;
  animation-name:fold-right-in;
  animation-duration: 0.3s;
} 

@keyframes fold-right-in {
  0% { 
    transform: translate(-100%,0); 
    /* transform: translateX(-100%);  */
  }
  100%{
    transform: translate(0%,0); 
    /* transform: translateX(0%);  */
  }
}

::-webkit-scrollbar {
  display: none !important;
}
</style>
