<template>
  <div>
    <a-layout>
        <a-layout-header class="top-bar">
            <div>{{title}} </div>
            <div class="top-bar-menus">
                <router-link to="/counter">计步器</router-link>
                <router-link to="/login">登陆</router-link>
            </div>
        </a-layout-header>
        <a-layout-content class="content">
            <!-- 二级路由 -->
            <transition name="slide">
                <router-view></router-view>
            </transition>
        </a-layout-content>
    </a-layout>
  </div>
</template>
<script>

export default {
  name: 'App',
  data(){
    return {
        title:"vue 记事本练习",
    }
  },
  methods:{
    
    sub(){
        
        this.formData.id = Date.now().toString().substr(-5)
        this.listData.push(this.formData)
        this.formData = {
            id:"",
            title:"",
            content:""
        }
    },
    updateForm(){
        let flag = this.listData.some((item)=>{
            return item.id === this.formData.id
        })
        if(flag){
            this.listData = this.listData.map((item) => {
                // this -> vue
                if(item.id === this.formData.id){
                    item = this.formData
                }
                return item
            })
        }else{
            alert("该表单的id不存在在原有list中，请点击新增按钮")
        }
        
    },
  },
}
</script>

<style scoped>

.top-bar {
    color:#fff;
    display: flex;
    justify-content: space-between;
}

.top-bar-menus {
    width:100px;
    display: flex;
    justify-content: space-between;
}

.content {
    display:flex;
    justify-content: space-between;
    padding:0px 24px;
    box-sizing: border-box;
    margin-top:16px;
    height: calc(100vh - 64px - 16px);
}

/* 
css3 动画
1.transition 过渡
2.transform  变形
3.animation  动画
*/

/* 进入时或离开时过渡样式 */
.slide-enter-active , .slide-leave-active {
    transition: all 0.55s ease-out;
}

/* 进入前 */
.slide-enter {
    position: absolute;
    right:-100%;
}
/* 进入后 */
.slide-enter-to {
    position: absolute;
    right:0;
}

/* 离开之前 */
.slide-leave {
    position: absolute;
    opacity: 1;
}

/* 离开之后 */
.slide-leave-to {
    position: absolute;
    opacity: 0;
}

</style>