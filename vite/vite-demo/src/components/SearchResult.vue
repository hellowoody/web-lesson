<template>
    <top-bar @searchHandle="searchOnChange" :searchInput="searchInput">
        <template v-slot:left>
            <div class="iconfont icon-back" style="color:#fff" @click="back"></div>
        </template>
        <template v-slot:right>
            <div @click="search" >搜索</div>
        </template>
    </top-bar>
    <h1>搜索结果页面</h1>
    <div v-for="(item,index) in dataList" :key="index">{{item.body}}</div>
</template>

<script>
import TopBar from '/@/components/TopBar.vue'
import {HttpGql} from '/@/kits/Http.js'
import {Http} from '/@/kits/HttpMock.js'

export default {
    name:"SearchResult",
    data(){
        return {
            searchInput:"",
            dataList:[]
        }
    },
    components: {
        TopBar
    },
    created(){
        // this.searchInput = this.$route.params.searchInput
        // console.log(this.$route.params.searchInput)
        this.searchInput = this.$route.query.searchInput
        console.log(this.$route.query.searchInput)
        this.initData()
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        search(){
            console.log("在当前页继续查询")
            this.initData()
        },
        searchOnChange(v){
            this.searchInput = v
        },
        async initData(){
            // const res = await Http("/listData",{
            //     searchInput:this.searchInput
            // })
            // this.dataList = res
            // console.log(res)
            const pagenum = 5
            const res = await HttpGql({
                query:`
                    query { 
                        repository(name:"web-lesson",owner:"hellowoody"){
                            name,
                            description,
                            issues (first:1,labels:["db"]) {
                                nodes {
                                    id,
                                    title,
                                    body,
                                    bodyHTML,
                                    comments (last:${pagenum}) {
                                        nodes {
                                            body,
                                        },
                                        pageInfo {
                                            hasPreviousPage
                                        }
                                    }
                                }
                            },
                        }
                    }
                `
            })
            this.dataList = res.data.repository.issues.nodes[0].comments.nodes
            this.dataList = this.dataList.filter(item => item.body.indexOf(this.searchInput) > 0)
            console.log(res)
        }
    }
}
</script>

<style>

</style>