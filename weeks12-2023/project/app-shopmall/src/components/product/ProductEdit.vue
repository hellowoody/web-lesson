<template>
    <div class="product-edit">
        <div class="wrapper-cb">
            <div class="diy-cb">
                <input :id="cb_id" type="checkbox" class="cb" v-model="good.checked"/>
                <label :for="cb_id"></label>
            </div>
        </div>
        <div class="pic" :style="goodImg"></div>
        <div class="wrapper-right">
            <div style="font-weight: bold;">{{ good.name }}</div>
            <div style="color:#FA6400;font-weight: bold;">￥{{ good.price }}</div>
            <div style="display: flex;">
                <a-popconfirm
                    v-if="good.count <=1 "
                    title="是否移除该商品?"
                    ok-text="移除"
                    cancel-text="取消"
                    @confirm="delConfirm"
                >
                    <div class="btn" >-</div>
                </a-popconfirm>
                <div v-else class="btn" @click="decrease">-</div>
                <div style="margin:0 12px;">{{ good.count }}</div>
                <div class="btn" @click="increase">+</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed,inject } from "vue"
import { useState } from "@/store/cart"
import { getItem } from "@/kits/localStore"
import { setActivePinia } from "pinia";

const toast = inject('showToast')
const token = getItem('token')
const userId = getItem('userId')
const state = useState()

const props = defineProps({
    good:Object
})

const cb_id = "cart-item-"+props.good.id

const goodImg = computed(() => {
    return {
        backgroundImage:`url(${props.good.imgpath})`,
        backgroundSize:'cover',
    }
})

const decrease = () => {
    state.modify({
        token,
        userId,
        ifIncrease:false,
        good:props.good,
    }).then( res => {
        if(res.code !== 1){
            toast.warning(res.msg)
        }
    })
}

const increase = () => {
    if(props.good.count === 9){
        toast.warning('最多购买9个')
        return 
    }
    state.modify({
        token,
        userId,
        ifIncrease:true,
        good:props.good,
    }).then( res => {
        if(res.code !== 1){
            toast.warning(res.msg)
        }
    })
}

const delConfirm = () => {
    state.delOne({
        userId,
        token,
        id:props.good.id,
    }).then( res => {
        if(res.code === 1){
            toast.success(res.msg)
        }else{
            toast.warning(res.msg)
        }
    })
}

</script>
<style scoped>
.product-edit {
    display: flex;
    border-radius:16px;
    margin-bottom:16px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
    height:100px;
}

.pic {
    flex:1;
    width:80px;
    border-top-left-radius:16px;
    border-bottom-left-radius:16px;
    background-color: #efefef;
}

.wrapper-right {
    flex:2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding:8px 20px;
    box-sizing: border-box;
    color:rgb(0 0 0 / 0.5);
    font-size:14px;
}

.btn {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    box-shadow: 0 1px 8px rgb(0 0 0 / 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper-cb {
    width:40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cb {
    visibility: hidden;
    height:0;
    width:0;
}

.diy-cb {
    position: relative;
    height:18px;
    width:18px;
}

.diy-cb label::before {
    content: '';
    position: absolute;
    border:1px solid #B620E0;
    border-radius: 3px;
    height:16px;
    width:16px;
    top:0;
    left:0;
}

.diy-cb .cb:checked + label::after {
    content: '✔';
    position: absolute;
    top:0;
    left:0;
    border-radius: 3px;
    height:18px;
    width:18px;
    background: #B620E0;
    color: #fff;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
}



</style>