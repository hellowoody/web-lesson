<template>
    <div>
        <top-bar>
            <template v-slot:left>
                <span class="iconfont icon-fanhuijiantou" style="font-size:20px;" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div>上传头像</div>
            </template>
        </top-bar>
        <content>
            <div class="avatar">
                <a-avatar :src="avatar" shape="square" />
            </div>
            <div class="btn">
                <a-upload
                    :data="data"
                    name="file"
                    :action="actionUrl"
                    @change="handleChange"
                >
                    <a-button>
                        <upload-outlined></upload-outlined>
                        上传头像
                    </a-button>
                </a-upload>
            </div>
        </content>
    </div>
</template>
<script setup>
import { inject } from "vue"
import { UploadOutlined } from '@ant-design/icons-vue';
import { ref,reactive } from "vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection.js"
import { getItem,setItem,removeItem } from "@/kits/localStore.js"
import { baseURL } from "@/kits/fetch.js"

const toast = inject("showToast")
const router = useRouter()
const state = useState()
const avatar = ref(getItem("avatar"))
const actionUrl = baseURL+"/uploadimg"
const data = reactive({
    userId:getItem("userId"),
    token:getItem("token")
})

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const handleChange = res => {
    // console.log(res)
    if(res.file.status == 'done'){
        switch (res.file.response.code) {
            case 1:
                toast.success(res.file.response.msg)
                avatar.value = res.file.response.data.avatar
                setItem("avatar",avatar.value)
                break;
            case 101:
            case 102:
            case 103:
                toast.warning(res.file.response.msg)
                removeItem("token")
                state.setDirection("forward")
                router.push("/login")
                break;
            default:
                toast.warning(res.file.response.msg)
                break;
        }
    }else if(res.file.status == 'error'){
        message.error(res.file.response.msg)
    }
}
</script>
<style scoped>
.ant-avatar {
    width: 100%;
    height: 100%;
}

.avatar {
    height: 300px;
    background: #efefef;
}

.btn {
    display: flex;
    justify-content: center;
    margin-top: 80px;
}
</style>