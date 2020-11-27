<template>
    <top-bar :searchDefault="searchContent">
      <template v-slot:left>
        <div style="font-size: 20px;" class="iconfont icon-back" @click="back"></div>
      </template>
    </top-bar> 
  <h1>this is search result </h1>
  <div v-for="(item,index) in dataList" :key="index">{{item.name}}</div>
  <hr>
    全局计数器:{{$store.state.count}}
    全局data:{{$store.state.data.name}}
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import { Http as HttpMock} from '@/kits/HttpMock.js'
import { Http ,HttpNew} from '@/kits/Http.js'
export default {
  name:"SearchResult",
  data(){
    return {
      searchContent:"",
      dataList:[],
    }
  },
  components:{
    TopBar
  },
  created(){
    // console.log(this.$route)
    console.log(this.$store.state.data.name)
    // this.searchContent = this.$route.query.searchInput
    this.searchContent = this.$route.params.searchInput
    this.initData()
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    async initData(){
      try {
        const res = await HttpNew("/dataList",{
          count:10,
          data:{
            name:"zhang"
          }
        })
        console.log(res)
        this.dataList = res.data
      } catch (err) {
        console.log(err)
      }
      // try {
      //   const pagenum = 5
      //   const res = await Http("/graphql",{
      //     query:`
      //           query { 
      //               repository(name:"web-lesson",owner:"hellowoody"){
      //                   name,
      //                   description,
      //                   issues (first:1,labels:["db"]) {
      //                       nodes {
      //                           id,
      //                           title,
      //                           body,
      //                           bodyHTML,
      //                           comments (last:${pagenum}) {
      //                               nodes {
      //                                   body,
      //                               },
      //                               pageInfo {
      //                                   hasPreviousPage
      //                               }
      //                           }
      //                       }
      //                   },
      //               }
      //           }
      //       `
      //   })
      //   console.log(res)
      //   this.dataList = res.data.data.repository.issues.nodes[0].comments.nodes
      // } catch (err) {
      //   console.log(err)
      // }
    }
  }
}
</script>

<style>

</style>