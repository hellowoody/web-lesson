<script setup>
import { SearchOutlined } from '@ant-design/icons-vue';

const emit = defineEmits(["focusHandle"])

const focusFunc = () => emit("focusHandle")

</script>

<template>
    <div class="top-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle">
                <a-input size="large" @focus="focusFunc" >
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