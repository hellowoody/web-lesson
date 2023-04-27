# 组件传值总结

 ## 父子组件传值

   - 父传子
   - 子调用父
 
 ## 组件获取“连线”的相邻组件

   - 获取父组件
     - Vue2
  
       > this.$parent 

     - Vue3

       > const app = Vue.getCurrentInstance() 
       > app.parent

   - 获取子组件
     - Vue2

       >  this.$children  []
       >  this.$refs      {}

     - Vue3

       > const app = Vue.getCurrentInstance() 
       > app.refs

