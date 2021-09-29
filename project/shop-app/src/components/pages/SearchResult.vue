<script setup>
import {ref} from "vue"
import {useRoute,useRouter} from "vue-router"
import {useStore} from "vuex"
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";

const route = useRoute();
const router = useRouter()
const store = useStore();

let searchContent = ""
const data = ref([])

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
}
const go = path => router.push({path})
const searchContentChange = content => {
    // console.log("现在时searchResult页面了",content)
    searchContent = content
}
const router_param_searchContent = route.query.searchContent;

const initData = (content) => {
    console.log("调用后台搜索方法的参数:",content)
    // 待实现
    // http.post("http://api",{
    //     searchContent : router_param_searchContent
    // }).then((resData) => {

    // })
    //  resData => [{},{},{}]
    const resData = [1,2,3,4,5]   //假设是从网络返回的数据
    data.value = resData
}

// 将从上一个页面拿到的搜索内容router_param_searchContent ，调用后台api进行搜索
initData(router_param_searchContent);

const search = () => {
    console.log("本次搜索的新内容:",searchContent)
    initData(searchContent)
}

</script>

<template>
    <div>
        <top-bar @searchContentChangeHandle="searchContentChange" :searchInput="router_param_searchContent" edit>
            <template v-slot:left>
                <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
            </template>
            <template v-slot:right>
                <div class="iconfont icon-sousuo" @click="search" style="font-size:23px;"></div>
            </template>
        </top-bar>
        <my-content>
            <div style="color:rgb(0 0 0 / 0.5);font-size:15px;font-weight:500;">有{{data.length}}个商品符合要求</div>
            <a-list :data-source="data">
                <template #renderItem="{item,index}">
                    <a-list-item>
                        {{index}} - {{item}}
                    </a-list-item>
                </template>
            </a-list>
        </my-content>
    </div>
</template>
