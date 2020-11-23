<template>
  <router-view></router-view>
</template>

<script>
import '@/assets/css/common.css';

/*
import / export default / export  是es6语法
require / module.exports  是commonjs语法 
*/

/*
在同一个文件中 只能声明一次export default 
在同一个文件中 可以多次声明export
*/

export default {
  name: 'App',
  components: {
  }
}


</script>
