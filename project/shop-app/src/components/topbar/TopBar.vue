<script setup>
import { SearchOutlined,EditOutlined } from '@ant-design/icons-vue';
import {ref,watch} from "vue"
const props = defineProps({
    edit:Boolean,       // 这个变量是个状态位（一般都是布尔类型或是0，1，2之类的简单数值），区别输入框显示状态的
    searchInput:String  // 输入框需要显示的内容
})
const emit = defineEmits(["focusHandle","searchContentChangeHandle"])
const focusFunc = () => emit("focusHandle")
const searchContent = ref(props.searchInput ? props.searchInput : "")
let timeoutId = null                                                                 // 定义一个计时器的编号
watch(searchContent,(currentVal,prevVal) => {
    // console.log(currentVal,prevVal)
    clearTimeout(timeoutId)                                                          // 清空/重置上一次的计时器
    timeoutId = setTimeout(() => emit("searchContentChangeHandle",currentVal),500)   // 创建计时器
})

</script>

<template>
    <div class="top-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle">
                <a-input v-if="edit" v-model:value="searchContent" size="large" >
                    <template #prefix>
                        <edit-outlined style="color:rgb(0 0 0 / 0.25)" />
                    </template>
                </a-input>
                <a-input v-else size="large" @focus="focusFunc" >
                    <template #prefix>
                        <search-outlined  style="color:rgb(0 0 0 / 0.25)" />
                    </template>
                </a-input>
            </slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style>
.top-bar {
    width:100%;
    height:60px;
    box-shadow: 0px 1px 2px rgba(50, 50, 50, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0px 18px;
}

.middle {
    width: 80%;
}

.ant-input-affix-wrapper {
    background-color: rgba(172, 172, 172, 0.1) !important;
    border:none !important;
    border-radius: 7px !important;
}
.ant-input-affix-wrapper > input.ant-input {
    background-color:unset
}

</style>