<template>
  <div>
      <top-bar style="background-color:#f7f7f7;box-shadow:unset;">
          <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
          <div slot="middle">订单明细</div>
      </top-bar>
      <my-content>
          <a-list :data-source="order.goodList">
              <a-list-item slot="renderItem" slot-scope="item" :key="item.id" @click="gotoGoodDetail(item)">
                  <div class="order">
                      <div class="pic" :style="ImgStyle(item.imgpath)"></div>
                      <div class="content">
                          <div style="font-size:16px;">{{item.name}}</div>
                          <div>数量:{{item.countbuy}} 个</div>
                          <div>单价:¥ {{item.price}}</div>
                          <div>总价:¥ {{TotalPrice(item.countbuy,item.price)}}</div>
                      </div>
                  </div>
              </a-list-item>
          </a-list>
      </my-content>
      <footer-bar>
          <div slot="left" style="font-size:13px;">
              <div style="font-size:15px;color:rgb(250, 100, 0);margin-bottom:3px;">订单状态: {{order.status.name}}</div>
              <div>实际付款: ¥{{order.price}}</div>
          </div>
          <footer-bar-button slot="right" name="提醒发货"></footer-bar-button>
      </footer-bar>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent';
import FooterBar from '@/components/footerbar/FooterBar';
import FooterBarButton from '@/components/footerbar/FooterBarButton';

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
        FooterBar,
        FooterBarButton,
    },
    created(){
        this.order = this.$store.state.selectedOrder
        // console.log(this.order.goodList)
    },
    computed:{
        ImgStyle(){
            return (path)=>({
                backgroundImage:'url('+path+')'
            })
        },
        TotalPrice(){
            return (count,price)=> count*price
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        gotoGoodDetail(item){
            this.$store.commit("addSelectedGoods",{
                id:item.id,
                type:item.type.id,
            })
            this.$router.push({
                path:"/gooddetail/"+item.id,
            })
        },
    }
}
</script>

<style scoped>

.order{
    display:flex;
    justify-content: flex-start;
    background-color: #fff;
    box-shadow: 0px 1px 8px #e3e3e3;
    border-radius: 12px;
    width: 100%;
    padding:16px;
}

.pic {
    background-color: #e5e5e5;
    border-radius: 8px;
    width:85px;
    height:85px;
    box-shadow: 0px 1px 6px rgb(40 40 40 / 0.2);
    margin-right:16px;
    flex:1;
}

.content {
    font-size:13px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex:2;
}

</style>