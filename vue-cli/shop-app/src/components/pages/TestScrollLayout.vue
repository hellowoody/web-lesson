<template>
  <div>
    <top-bar>
       <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
      <div slot="middle">测试 左右滚动</div>
    </top-bar>
    <div style=“width:100%;height:260px;background-color:red;”>轮播图</div>
    <div style="display:flex;height:100vh">
      <div style="flex:1;background-color:blue">left
        <div v-for="item in 20" :key="item" style="height:50px">{{item}}</div>
      </div>
      <div style="flex:3;">right</div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'

export default {
  name:"TestScrollLayout",
  components:{
    TopBar,
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>
