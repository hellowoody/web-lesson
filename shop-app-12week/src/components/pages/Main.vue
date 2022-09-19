<script setup>
import TabBar from "@/components/tabbar/TabBar.vue"
import TabBarItem from "@/components/tabbar/TabBarItem.vue"

</script>

<template>
    <div>
        <!-- router-view可以理解为页面的占位符 -->
        <router-view></router-view>
        <!-- position:fixed bottom：0 div -->
        <tab-bar>
            <tab-bar-item name="首页" path="/main/home">
                <template v-slot:icon>
                    <div class="iconfont icon-Homehomepagemenu" style="font-size:20px;"></div>
                </template>
            </tab-bar-item>
            <tab-bar-item name="类别" path="/main/category">
                <template v-slot:icon>
                    <div class="iconfont icon-category" style="font-size:20px;"></div>
                </template>
            </tab-bar-item>
            <tab-bar-item name="订单" path="/main/order">
                <template v-slot:icon>
                    <div class="iconfont icon-jiesuanqingdan" style="font-size:20px;"></div>
                </template>
            </tab-bar-item>
            <tab-bar-item name="我的" path="/main/account">
                <template v-slot:icon>
                    <div class="iconfont icon-account" style="font-size:20px;"></div>
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>