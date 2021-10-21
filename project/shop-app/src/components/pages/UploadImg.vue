<script setup>
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import {UserOutlined,UploadOutlined} from "@ant-design/icons-vue"
import {getCacheVal,setCacheVal} from "@/kits/LocalStorageKit"
import {baseURL,ImgUrl} from "@/kits/HttpKit"
import {useRouter} from "vue-router"
import {useStore} from "vuex"
import {ref,reactive,inject} from "vue";

const router = useRouter()
const store = useStore()
const message = inject("$message")
const avatar = ref(getCacheVal("imgpath"))
const data = reactive({
    userid:getCacheVal("userid")
})
const actionpath = baseURL + "/api/uploadavatar";

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
}

const handleChange = (info) => {
    // console.log(info)
    if(info.file.status !== 'uploading'){
        console.log(info.file,info.fileList);
    }
    if(info.file.status === "done"){
        message.success(info.file.response.msg);
        avatar.value = ImgUrl + info.file.response.data.filename;
        setCacheVal("imgpath",avatar.value)
    }else if (info.file.status === "error"){
        message.error(info.file.response.msg)
    }
}

</script>

<template>
    <div>
        <top-bar style="box-shadow: unset;">
            <template v-slot:left>
                <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
            </template>
            <template v-slot:middle>
                <div>上传头像</div>
            </template>
        </top-bar>
        <my-content>
            <div class="pic">
                <a-avatar shape="square" v-if="avatar === ''" :size="100" >
                    <template #icon><user-outlined /></template>
                </a-avatar>
                <a-avatar shape="square" v-else :src="avatar" :size="100" ></a-avatar>
            </div>
            <div class="btn">
                <a-upload 
                    name="file" 
                    :data="data" 
                    :action="actionpath" 
                    @change="handleChange">
                    <a-button size="large" style="width:300px;"><upload-outlined />上传头像</a-button>
                </a-upload>
            </div>
        </my-content>
    </div>
</template>

<style scoped>
.ant-avatar {
    font-size:190px !important;
    width:100% !important;
    height:100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pic {
    width:100%;
    height:320px;
    background-color:#efefef;
    margin-top:64px;
}

.btn {
    display:flex;
    justify-content: center;
    margin-top:64px;
}
</style>