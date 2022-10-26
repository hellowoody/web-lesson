<script setup>
import { ref } from "vue";
import { DownOutlined } from '@ant-design/icons-vue';
import { useRouter } from "vue-router"
import { getItem,clearItem } from "@/kits/LocalStorageKit"
import Modal from 'ant-design-vue/lib/modal';

const userName = ref(getItem("userName"))
const router = useRouter()

const logout = () => {
    Modal.confirm({
        title:"是否要退出?",
        okText:"确定",
        cancelText:"取消",
        centered:true,
        onOk(){
            clearItem("token")
            clearItem("userName")
            clearItem("userId")
            router.replace({path:"/login"})
        },
        onCancel(){}
    })
}

</script>

<template>
    <div class="header">
        <div>后台管理系统</div>
        <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent style="color:#fff;">
                {{ userName }}
                <DownOutlined  />
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                    <a href="javascript:;">系统设置</a>
                    </a-menu-item>
                    <a-menu-item>
                    <a href="javascript:;">其他菜单</a>
                    </a-menu-item>
                    <a-menu-item>
                    <a href="javascript:;" @click="logout">登出</a>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
</template>

<style scoped>
.header {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 24px;
    box-sizing:border-box;
    background-color: #001529;
    color:#fff;
    height:100%;
}
</style>