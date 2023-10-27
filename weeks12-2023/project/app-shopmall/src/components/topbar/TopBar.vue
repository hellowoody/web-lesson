<template>
    <div class="top-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle">
                <!-- <a-input placeholder="请输入查询内容" v-on:focus="focusHandle"> -->
                <a-input v-if="edit" placeholder="请输入查询内容" v-model:value="searchContent">
                    <template #prefix>
                        <SearchOutlined />
                    </template>
                </a-input>
                <a-input v-else placeholder="请输入查询内容" @focus="focusHandle">
                    <template #prefix>
                        <SearchOutlined />
                    </template>
                </a-input>
            </slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script setup>
import { SearchOutlined } from '@ant-design/icons-vue';
import {ref,watch} from "vue"

const props = defineProps({
    edit:{
        type:Boolean,
        default:false
    },
    searchInput:String
})

const emits = defineEmits(['handleTopBar',"searchContentChangeHandle"])

const searchContent = ref(props.searchInput ? props.searchInput : "")

const focusHandle = () => {
    emits("handleTopBar")
}
// 用抖动debounce 解决实时侦听的性能消耗
let timeoutTicket = null
watch(searchContent,(curr,prev) => {
    // console.log("子组件：",curr,prev)
    clearTimeout(timeoutTicket)
    timeoutTicket = setTimeout(() => {
        // console.log("实际调用父组件的时刻",curr)
        emits("searchContentChangeHandle",curr)
    },500)
})
</script>

<style scoped>
.top-bar {
    height: 65px;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
}

.middle {
    width: 80%;
}

.ant-input-affix-wrapper {
    background: rgb(172 172 172 / 0.1);
    border: unset;
    color: #b4b4b4;
}

/* 
    :deep(.ant-input-affix-wrapper > input)
*/
:deep(.ant-input-affix-wrapper > input) {
    background: unset;
}

</style>