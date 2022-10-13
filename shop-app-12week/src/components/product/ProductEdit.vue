<script setup>
import { inject,computed } from "vue"
import { useState } from "@/store/cart"
import { getItem } from "@/kits/LocalStorageKit"

const message = inject("$message")
const token = getItem("token")
const userId = getItem("userId")
const state = useState();
const props = defineProps({
    product:Object
})
const id = "cart-cb-"+props.product.id

const bgStyle = computed(() => {
    return {
        backgroundImage:`url(${props.product.imgpath})`,
        backgroundSize: "cover"
    }
})

const decrease = () => {
    state.addCart({
        token,
        userId,
        ifIncrease:false,
        good:props.product
    }).then(res => {
        if(res.code !== 1){
            message.warning(res.msg)
        }
    })
}

const increase = () => {
    state.addCart({
        token,
        userId,
        ifIncrease:true,
        good:props.product
    }).then(res => {
        if(res.code !== 1){
            message.warning(res.msg)
        }
    })
}
</script>
<template>
    <div class="product-edit">
        <div class="wrapper-cb">
            <div class="diy-cb">
                <input :id="id" type="checkbox" class="cb" v-model="product.checked" />
                <label :for="id"></label>
            </div>
        </div>
        <div class="pic" :style="bgStyle"></div>
        <div class="wrapper-right">
            <div style="font-weight: bold;">{{product.name}}</div>
            <div style="color:rgb(250, 100, 0)">{{product.price}}</div>
            <div style="display:flex;">
                <div class="btn" @click="decrease">-</div>
                <div style="margin:auto 8px;">{{product.count}}</div>
                <div class="btn" @click="increase">+</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-edit {
    display:flex;
    border-radius: 15px;
    margin-bottom: 16px;
    box-shadow: 0px 2px 8px rgb(0 0 0 / 15%);
    height:90px;
}

.pic {
    flex:1;
    width:80px;
    background-color: #efefef;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}

.wrapper-right {
    flex:2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color:rgb(0 0 0 / 0.5);
    align-items: flex-end;
    padding:8px 18px;
    box-sizing: border-box;
}

.btn {
    width:21px;
    height:21px;
    border-radius: 50%;
    box-shadow: 0px 1px 8px rgb(0 0 0 / 0.15);
    display:flex;
    justify-content: center;
    align-items: center;
}

.wrapper-cb {
    width:40px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.cb {
    visibility: hidden;
    width:0px;
    height:0px;
}

.diy-cb {
    position: relative;
    width:16px;
    height:16px;
}

.diy-cb label::before {
    content:"";
    position: absolute;
    border:1px solid #B620E0;
    border-radius: 3px;
    width:16px;
    height:16px;
    top:0;
    left: 0;
}

.diy-cb input[type='checkbox']:checked + label::after {
    content:"✓";
    position: absolute;
    border:1px solid #B620E0;
    border-radius: 3px;
    width:16px;
    height:16px;
    top:0;
    left: 0;
    background-color: #B620E0;
    color:#fff;
    line-height: 16px;
    text-align: center;
    font-size:12px;
}
</style>