<template>
    <div class="Main">
        <router-view></router-view>
        <tab-bar>
            <tab-bar-item name="首页" path="/main/home">
                <div slot="icon">
                    <div class="iconfont icon-home" :style="{fontSize:'19px'}"></div>
                </div>
            </tab-bar-item>
            <tab-bar-item name="产品" path="/main/product">
                <div slot="icon">
                    <div class="iconfont icon-product" :style="{fontSize:'19px'}"></div>
                </div>
            </tab-bar-item>
            <tab-bar-item name="订单" path="/main/order"/>
            <tab-bar-item name="我的" path="/main/account">
                <div slot="icon">
                    <div class="iconfont icon-caidaniconwodehui" :style="{fontSize:'19px'}"></div>
                </div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar.vue'
import TabBarItem from '@/components/tabbar/TabBarItem.vue'

export default {
  name:"Main",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>