<script setup>
import {computed,inject} from "vue"
import {ImgUrl} from "@/kits/HttpKit";
import {useStore} from "vuex";

const message = inject("$message")
const store = useStore()
const props = defineProps({
    index:Number,
    product:Object
})

const ImgStyle = computed(() => {
    return {
        "background-image":`url('${props.product.imgpath}')`,
        "background-size":"cover"
    }
})

const decrease = async () => {
    await store.dispatch("good/subCart",props.index)
}

const increase = async () => {
    const res = await store.dispatch("good/addCart",props.index)
    if(!res){
        message.warn("购买数量最大支持99")
    }
}

const confirm = () => {
    decrease()
    message.success("移除成功")
}

</script>
<template>
    <div class="product-edit">
        <div class="pic" :style="ImgStyle"></div>
        <div class="wrapper-right">
            <div style="font-weight:bold;">{{product.name}}</div>
            <div style="color:#fa6400">{{product.price}}</div>
            <div style="display:flex">
                <a-popconfirm
                    v-if="product.countbuy <= 1"
                    title="是否从购物车移除改商品?"
                    ok-text="移除"
                    cancel-text="取消"
                    @confirm="confirm"
                >
                    <div class="btn">-</div>
                </a-popconfirm>
                <div v-else class="btn" @click="decrease">-</div>
                <div style="margin:1px 10px 0px 10px;">{{product.countbuy}}</div>
                <div class="btn" @click="increase">+</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-edit {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding:12px;
    box-sizing: border-box;
    box-shadow: 0px 1px 8px rgb(0 0 0 / 0.1);
}

.pic {
    flex:1;
    width:75px;
    height:75px;
    border-radius:10px;
    box-shadow: 0px 1px 8px rgb(0 0 0 / 0.1);
}

.wrapper-right {
    flex:2;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left:24px;
    font-size:14px;
    color:rgb(0 0 0 / 0.5);
}

.btn {
    box-shadow: 0px 3px 4px rgb(50 50 50 / 0.2);
    padding:6px;
    box-sizing: border-box;
    width:21px;
    height:21px;
    display:flex;
    justify-content: center;
    align-items:center;
}
</style>