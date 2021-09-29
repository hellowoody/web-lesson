<script setup>
import {ref,onMounted} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router";
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";

const router = useRouter()
const store = useStore();
const homeImgs = ref([
    "src/assets/imgs/home01.png",
    "src/assets/imgs/home02.png",
    "src/assets/imgs/home03.png",
])

const back = () => router.go(-1)
const go = path => {
    store.commit("pageDirection/setDirection","forward")
    router.push({path})
}

</script>

<template>
<div ref="home">
    <top-bar @focusHandle="go('/search')">
        <template v-slot:right>
            <div class="iconfont icon-gouwuche1" style="font-size:24px" ></div>
        </template>
    </top-bar>
    <my-content>
        <a-carousel>
            <div v-for="(item,index) in homeImgs" :key="index+item">
                <h3 class="carousel-title">{{index+1}}</h3>
                <img class="carousel-img" :src="item" />
            </div>
        </a-carousel>
        <a-button @click="go('/vrroom')">VR全景</a-button>
    </my-content>
</div>
</template>

<style scoped>
/* >>> to :deep() */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  overflow: hidden;
  position: relative;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.carousel-title {
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 50%;
}

.carousel-img {
    position: absolute;
    top:0px;
    left:0px;
    object-fit: cover;
    width:100%;
    height:160px;
}
</style>