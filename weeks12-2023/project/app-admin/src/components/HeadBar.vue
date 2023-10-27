<template>
    <div class="header">
        <div>后台管理系统</div>
        <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
                {{ userName }}
                <DownOutlined />
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                        <a href="javascript:;">系统设置</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">其他设置</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;" @click="logout">登出</a>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { getItem,removeItem } from "@/kits/localStore"
import {DownOutlined} from "@ant-design/icons-vue"
import { Modal } from "ant-design-vue"
import { useRouter } from "vue-router";

const router = useRouter()
const userName = ref(getItem("userName"))

const logout = () => {
    Modal.confirm({
        title: "确认登出？",
        okText: "确认",
        cancelText: "取消",
        onOk: () => {
            removeItem("token")
            removeItem("userId")
            removeItem("userName")
            router.replace({path:"/login"})
        }
    })
}
</script>
<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 24px;
    box-sizing: border-box;
    background-color: #001525;
    color:#fff;
    height: 100%;
}
</style>