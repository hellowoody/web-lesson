<template>
  <div id="app">
    <transition :name="transitionName" >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {getCacheVal} from '@/kits/LocalStorage'
export default {
  name:"app",
  data(){
    return {
      transitionName:""
    }
  },
  watch:{
    '$route' (to, from) {
        //此时假设从index页面跳转到pointList页面
        // console.log(to); // "/pointList"
        // console.log(from); // “/index”
        if(to.path === "/main/account"){
          if(!getCacheVal("token") || getCacheVal("token").length <= 0 ){
            this.$router.replace({path:"/login"})
          }
        }
        if ((to.path == "/search" && from.path == "/main/home") || (to.path == "/main/home" && from.path == "/search")) {
          const routeDeep = ['/main/home', '/search'];
          const toDepth = routeDeep.indexOf(to.path)
          const fromDepth = routeDeep.indexOf(from.path)
          if (fromDepth >= 0 ){
            this.transitionName = toDepth > fromDepth ? 'fold-left' : 'fold-right'
          }
        }else{
            this.transitionName = ""
        }
      }
  },
}
</script>

<style>
@import "./assets/css/commom.css";
@import "./assets/icon/iconfont.css";

  .fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .3s;
  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .3s;
  }
  @keyframes fold-left-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: hidden; */
    }
  }
  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .3s;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .3s;
  }
  @keyframes fold-right-in{
    0% {
      width: 100%;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-right-out  {
    0% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: hidden; */
    }
  }
</style>
