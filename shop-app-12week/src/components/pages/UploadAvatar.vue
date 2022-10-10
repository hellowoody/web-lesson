<script setup>
import { ref,reactive,inject } from "vue"
import TopBar from "@/components/topbar/TopBar.vue";
import Content from "@/components/content/Content.vue";
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import { getItem,setItem,clearItem } from "@/kits/LocalStorageKit"
import { baseURL } from "@/kits/HttpKit"
import { UserOutlined,UploadOutlined } from "@ant-design/icons-vue"

const message = inject("$message")
const router = useRouter()
const state = useState()
const avatar = ref(getItem("avatar"))
const data = reactive({
    token:getItem("token"),
    userId:getItem("userId"),
})
const action = baseURL + "/api/uploadimg"

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const handleChange = res => {
    if(res.file.status === "done"){
        switch(res.file.response.code){
            case 1:
                message.success(res.file.response.msg)
                avatar.value = res.file.response.data.avatar
                setItem("avatar",res.file.response.data.avatar)
                break;
            case 101:
            case 102:
                message.warning(res.file.response.msg)
                clearItem("token");
                state.setDirection("forward")
                router.push({
                    path:"/login"
                })
                break;
            default:
                message.warning(res.msg)
                break;
        }
        
    }else if(res.file.status === "error"){
        message.error(res.file.response.msg)
    }
}

</script>

<template>
    <div>
        <top-bar style="box-shadow:unset;">
            <template v-slot:left>
                <span class="iconfont icon-xiangzuojiantou" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div></div>
            </template>
        </top-bar>
        <content>
            <div class="pic">
                <a-avatar v-if="avatar === ''" shape="square" >
                    <template #icon><UserOutlined /></template>
                </a-avatar>
                <a-avatar v-else :src="avatar" shape="square"></a-avatar>
            </div>
            <div class="btn">
                <a-upload
                    :data="data"
                    name="file"
                    :action="action"
                    @change="handleChange"
                >
                    <a-button size="large" style="width:300px;">
                        <upload-outlined></upload-outlined>
                        上传头像
                    </a-button>
                </a-upload>
            </div>
        </content>
    </div>
</template>

<style scoped>
.ant-avatar {
    width:100% !important;
    height:100% !important;
}

.pic {
    height:320px;
    background-color:#efefef;
}

.btn {
    display:flex;
    justify-content: center;
    margin-top:80px;
}
</style>