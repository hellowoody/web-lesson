<template>
    <div>
        <top-bar :focusFunc="search" >
            <div slot="right" @click="goto('/cart')" class="iconfont icon-gouwuchezhengpin" style="font-size: 24px"></div>
        </top-bar>
        <my-content>
            <a-carousel :after-change="onChange">
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </a-carousel>
            <div class="title">
                <div class="title-left">篮球鞋</div>    
                <div class="title-right">查看全部</div>    
            </div> 
            <div class="product-card-list">
                <product-card style="flex-shrink: 0;margin-right:12px;" v-for="item in goods" :product="item" :key="item.id" />
            </div>
            <div class="title">
                <div class="title-left">类别</div>    
                <div class="title-right">查看全部</div>    
            </div> 
            <div class="wrapper" ref="wrapper" >
                <ul class="list" ref="list">
                    <div v-for="item in 5" :key="item" style="flex-shrink: 0;margin-right: 12px;width:119px;height:90px;border-radius:15px;background-color:#E5E5E5"></div>
                </ul>
            </div>
        </my-content>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import ProductCard from '@/components/product/ProductCard'
import BScroll from 'better-scroll'
import {HttpGql,ImgUrl} from '@/kits/Http'

export default {
    name:'Home',
    data(){
        return {
            goods:[]
        }
    },
    components:{
        TopBar,
        MyContent,
        ProductCard
    },
    async created(){
        let goodtype = "03"
        let gql = {
            query:`
                {
                    goods(count:5,type:"${goodtype}"){
                        name
                        id
                        price
                        gooddesc 
                        imgpath
                    }
                }
            `
        }
       try {
            let res = await HttpGql(gql)
            this.goods = res.data.goods.map((item)=>{
                item.imgpath =  ImgUrl +item.imgpath
                return item
            })
            console.log(this.goods)
       } catch (error) {
           for(let item of [1,2,3,4,5]){
               this.goods.push({
                   id:item,
                   name:"产品名称",
                   price:0
               })
           }
       }    
    },
    methods:{
        goto(path){
            this.$router.push({path})
        },
        search(){
            this.$router.push({path:'/search'})
        },
        onChange(a, b, c) {
            // console.log(a, b, c);
        },
    },
    mounted() {
        this.$nextTick(() => { // 使用 this.$nextTick 为了确保组件已经渲染完毕
            let itemWidth = 138 // 这里是设置列表每一项的宽度
            let margin = 0
            // width是整个列表的宽度
            let width = (itemWidth + margin) * 5 - margin
            // console.log(width)
            this.$refs.list.style.width = width + 'px' // 设置.list的宽度的宽度
            this.$nextTick(() => {
                if (!this.picScroll) {
                    this.picScroll = new BScroll(this.$refs.wrapper, {
                        scrollX: true,
                        eventPassthrough: 'vertical' // 忽略竖直方向的滚动
                    })
                } else {
                    this.picScroll.refresh()
                }
            })
        })
    }
}
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #e5e5e5;
  overflow: hidden;
  border-radius: 15px;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.wrapper {
    overflow: hidden;
    white-space: nowrap; /*当子元素超过父元素宽度的时候，不会折行*/
    margin-left: 24px;
    margin-top:12px;
}

.wrapper .list {
    display: flex;
    padding:0px;
}
.product-card-list {
    display: flex;
    overflow-x: auto;
    margin-top:16px;
}

.title {
    display: flex;
    justify-content: space-between;
    margin-top:24px;
}

.title-left {
    font-size: 14px;
    font-weight: bold;
    color: rgb(0 0 0 / 0.5)
}

.title-right {
    font-size: 12px;
    color:#B620E0;
    align-self: flex-end;
}

/* 隐藏滚动进度条 */
::-webkit-scrollbar {
    display: none;
}
</style>