<script setup>
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import ProductEdit from "@/components/product/ProductEdit.vue";
import {useRouter} from "vue-router"
import {useStore} from "vuex"

const store = useStore();
const router = useRouter();

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
}

</script>

<template>
    <div>
        <top-bar style="box-shadow:unset;">
            <template v-slot:left>
                <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
            </template>
            <template v-slot:middle>
                <div>购物车</div>
            </template>
        </top-bar>
        <my-content>
            <product-edit 
                v-for="(item,index) in store.state.good.cartData" 
                :key="item.id+index"
                :product="item"
                :index="index"
                style="margin-top:16px;"
            ></product-edit>
        </my-content>
    </div>
</template>