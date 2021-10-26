<script setup>
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import ProductEdit from "@/components/product/ProductEdit.vue";
import FooterBar from "@/components/footerbar/FooterBar.vue";
import FooterBarButton from "@/components/footerbar/FooterBarButton.vue";
import {useRouter} from "vue-router"
import {useStore} from "vuex"
import {inject} from "vue";

const message = inject("$message")
const store = useStore();
const router = useRouter();

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
}

const order = async () => {
    try {
        const res = await store.dispatch("good/order")
        console.log(res)
        if(res.code === 1){
            message.success(res.msg)
            store.commit("good/resetCart")
        }else{  
            message.error(res.msg)
        }
    } catch(e) {
        message.error(e)
    }  
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
        <footer-bar>
            <template v-slot:left>
                <div>
                    <div style="color:rgb(0 0 0 / 0.5);font-size:12px;font-weight:bold">总价</div>
                    <div style="color:#fa6400;font-size:16px;font-weight:bold">{{store.getters["good/cartTotalPrice"]}}</div>
                </div>
            </template>
            <template v-slot:right>
                <footer-bar-button name="创建订单" @funcHandle="order" style="border:none;background-color:#d8d8d8;color:#fff;"  />
            </template>
        </footer-bar>
    </div>
</template>