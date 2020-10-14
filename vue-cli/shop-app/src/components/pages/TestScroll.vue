<template>
  <div>
    <top-bar>
       <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
      <div slot="middle">测试 左右滚动</div>
    </top-bar>
    <div class="content">
      <div class="left-wrapper">
        <div v-for="item in categorys" :key="item" style="height:60px;">{{item}}</div>
      </div>
      <div class="right-wrapper">
        <div v-for="item in detailList" :key="item.name" >
          <div v-for="(t,index) in item.list" :key="item.name+index" style="height:30px">
            <span v-if="index === 0 ">{{item.name + "-" + t.name}}</span>
            <span v-else>{{t.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'

export default {
  name:"TestScroll",
  data(){
    return {
      categorys:[
        "类别1",
        "类别2",
        "类别3",
        "类别4",
        "类别5",
        "类别6",
      ],
      detailList:[
        {
          name:"类别1",
          list:[
            {name:1},
            {name:2},
            {name:3},
            {name:4},
            {name:5},
            {name:6},
          ]
        },
        {
          name:"类别2",
          list:[
            {name:1},
            {name:2},
            {name:3},
            {name:4},
            {name:5},
            {name:6},
          ]
        },
        {
          name:"类别3",
          list:[
            {name:1},
            {name:2},
            {name:3},
            {name:4},
            {name:5},
            {name:6},
          ]
        },
        {
          name:"类别4",
          list:[
            {name:1},
            {name:2},
            {name:3},
            {name:4},
            {name:5},
            {name:6},
          ]
        },
        {
          name:"类别5",
          list:[
            {name:1},
            {name:2},
            {name:3},
            {name:4},
            {name:5},
            {name:6},
          ]
        },
        {
          name:"类别6",
          list:[
            {name:1},
            {name:2},
            {name:3},
            {name:4},
            {name:5},
            {name:6},
          ]
        },
      ]
    }
  },
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

<style scoped>
.content {
  display:flex;
  height:700px;
}
.left-wrapper {
  flex:1;
  background-color: rgb(249, 190, 173);
  overflow-y: auto;
}
.right-wrapper {
  flex:3;
  background-color: rgb(177, 234, 253);
  overflow-y: auto;
}
</style>