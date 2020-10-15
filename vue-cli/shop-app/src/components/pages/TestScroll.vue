<template>
  <div>
    <top-bar>
       <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
      <div slot="middle">测试 左右滚动</div>
      <div slot="right" @click="test">向上滑动</div>
    </top-bar>
    <div class="content">
      <div class="left-wrapper">
        <div v-for="(item,index) in categorys" :key="item" :class="[activeCategoryIndex === index ? 'left-wrapper-item-active' : 'left-wrapper-item' ]"  @click="selectedHandle(index)">{{item}}</div>
      </div>
      <div class="right-wrapper" ref="right">
        <div v-for="item in detalList" :key="item.name" class="right-wrapper-item">
          <div v-for="(t,index) in item.list" :key="item.name+index" style="height:30px">
            <span v-if="index === 0">{{t.name + "-" + item.name}}</span>
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
      activeCategoryIndex:0,
      distance:0,
      scrollFlag:false,
      categorys:[
        "类别1",
        "类别2",
        "类别3",
        "类别4",
        "类别5",
        "类别6",
      ],
      detalList:[
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
  mounted(){
    let el = this.$refs.right
    el.addEventListener('scroll',()=>{
      let index = Math.floor(el.scrollTop/600) //除法得到结果 向下取整
      // let index = Math.ceil(el.scrollTop/600)    //除法得到结果 向上取整
      
      if(!this.scrollFlag){
        this.activeCategoryIndex = index
      }
    })
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    test(){
      const el = this.$refs.right
      el.scrollTop += 600;
    },
    selectedHandle(index){
      this.activeCategoryIndex = index

      let el = this.$refs.right
      let final_distance = 600*index
      const step = 150
      this.scrollFlag = true
      const scrollAnimation = ()=>{
        setTimeout(()=>{
          if(this.distance < final_distance){
            this.distance += step
            el.scrollTop = this.distance
            scrollAnimation()
          }else{
            if(this.distance > final_distance){
              this.distance -= step
              el.scrollTop = this.distance
              scrollAnimation()
            }else{
              this.scrollFlag = false
            }
          }
        },100)
      }
      scrollAnimation()
    },
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

.left-wrapper-item {
  height:60px;
  display:flex;
  align-items: center;
  justify-content: center;
}

.left-wrapper-item-active {
  height:60px;
  background-color: #fff;
  display:flex;
  align-items: center;
  justify-content: center;
}

.right-wrapper {
  flex:3;
  overflow-y: auto;
  /* padding-bottom:500px; */
}

.right-wrapper-item {
  background-color: rgb(177, 234, 253);
  margin:8px 16px 16px 16px;
  height:600px;
}
</style>