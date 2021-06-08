<template>
  <a-layout>
      <a-layout-header class="header">
          <div>{{title}}</div>
          <div class="header-nav">
              <router-link to="/counter">计步器</router-link>
              <router-link to="/login">登陆</router-link>
          </div>
      </a-layout-header>
      <a-layout-content class="content">
          <!-- 二级路由占位符 -->
          <!-- list -->
          <!-- detail -->
          <transition name="slide">
              <router-view></router-view>
          </transition>
      </a-layout-content>
  </a-layout>
</template>

<script>

export default {
  name: 'Notepad',
  data(){
    return {
      title:"单页面记事本应用-Vue",
    }
  },
  methods:{
    sub(){
        console.log("我接受到了子组件的广播")
        this.formData.id = Date.now().toString().substr(-3)
        this.list.push(this.formData)
        this.formData = {
            id:"",
            title:"",
            content:""
        }
    },
    
    update(){
        const flag = this.list.some((item) => {
            return item.id === this.formData.id
        })
        if(flag){
            // todo update
            this.list = this.list.map((item) => {
                if(item.id === this.formData.id){
                    item = this.formData
                }
                return item
            })
        }else{
            alert("该id不存在于左侧列表中，请点击新增按钮进行添加")
        }
    },
  },
}
</script>

<style scoped>
.header {
    display:flex;
    justify-content:space-between;
    color:#fff
}

.header-nav {
    width:100px;
    display:flex;
    justify-content:space-between;
}

.content {
    display:flex;
    justify-content: space-between; 
    padding:0px 24px;
    margin-top:24px;
    height: calc(100vh - 64px - 24px);
}

/* 
css3 动画效果 
1.transition 过渡
2.transform  变形
3.animation  动画
*/

.slide-enter-active , .slide-leave-active  {
    transition: all 0.75s ease-out;
}


/* 进入前的样式 */
.slide-enter {
    position:absolute;
    right:-100%; 
}
/* 进入后的样式 */
.slide-enter-to {
    position:absolute;
    right:0;
}

/* 离开前的样式 */
.slide-leave {
    position: absolute;
    opacity: 1;
}

/* 离开后的样式 */
.slide-leave-to {
    position: absolute;
    opacity: 0;
}

</style>

