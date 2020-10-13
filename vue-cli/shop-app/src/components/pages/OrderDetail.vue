<template>
  <div>
      <top-bar>
          <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
          <div slot="middle">订单明细</div>
      </top-bar>
      <my-content>
{{order}}
      </my-content>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent';

export default {
    name:"OrderDetail",
    data(){
        return {
            order:{}
        }
    },
    components:{
        TopBar,
        MyContent,
    },
    created(){
        this.order = this.$route.params
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
    }
}
</script>

<style scoped>

</style>