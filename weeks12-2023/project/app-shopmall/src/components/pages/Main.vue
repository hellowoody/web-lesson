<template>
    <div>
        <!-- 二级路由入口 “占位符” -->
        <router-view></router-view>
        <tab-bar>
            <tab-bar-item name="首页" path="/main/home">
                <template v-slot:icon>
                    <div class="iconfont icon-shouye" style="font-size:28px;"></div>
                </template>
            </tab-bar-item>
            <tab-bar-item name="类别" path="/main/category">
                <template v-slot:icon>
                    <div class="iconfont icon-fenlei" style="font-size:28px;"></div>
                </template>
            </tab-bar-item>
            <tab-bar-item name="订单" path="/main/order">
                <template v-slot:icon>
                    <div class="iconfont icon-dingdan" style="font-size:28px;"></div>
                </template>
            </tab-bar-item>
            <tab-bar-item name="我的" path="/main/profile">
                <template v-slot:icon>
                    <div class="iconfont icon-wode" style="font-size:28px;"></div>
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script setup>
import TabBar from "@/components/tabbar/TabBar.vue";
import TabBarItem from "@/components/tabbar/TabBarItem.vue";
</script>

<style  scoped>

</style>