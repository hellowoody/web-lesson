<template>
  <!-- <a-input-search
      v-model:value="searchInput"
      placeholder="输入商品名称或描述"
      style="width: 200px"
      @search="onSearch"
    /> -->
  <a-input-search
      v-model:value="searchInput"
      placeholder="输入商品名称或描述"
      style="width: 200px"
    />
  <a-list
    :loading="loading"
    item-layout="horizontal"
    :data-source="dataList"
  >
    <template v-slot:renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta :description="item.price" >
          <template v-slot:title>
           {{item.name}}
          </template>
          <template v-slot:avatar>
            <a-avatar shape="square"  :src="item.imgpath" />
          </template>
        </a-list-item-meta>
        <div>{{item.gooddesc}}</div>
        <template v-slot:actions>
          <a>编辑</a>
          <a style="color:red">删除</a>
        </template>
      </a-list-item>
    </template>
    <template v-slot:loadMore>
      <div :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }" >
        <a-spin v-if="loadingMore" />
        <a-button v-else @click="onLoadMore"> 加载更多 </a-button>
      </div>
    </template>
  </a-list>
</template>

<script>
import {ref, reactive,toRefs,onMounted,watch,watchEffect} from 'vue';
import {HttpGql,ImgUrl} from '/@/kits/Http'

export default {
    name:"ProductList",
    setup(){
      const { 
        data,
        initData,
        onLoadMore, 
        onSearch
      } = useList();

      initData()

      return {
        ...toRefs(data),
        onLoadMore,
        onSearch
      }
    }

}

function useList(){
  const data = reactive({
    loading: true,
    loadingMore: false,
    dataList:[],
    searchInput:"",
  });

  let start = 0
  let pageCount = 8
  let timeout = 0
  
  const initData = async () => {
    data.dataList = await getData(start,pageCount,data.searchInput)
    data.loading = false
  }

  const onLoadMore = async ()=>{
    data.loadingMore = true;
    start += 8
    const res = await getData(start,pageCount,data.searchInput);
    data.dataList = data.dataList.concat(res)
    data.loadingMore =false;
  }

  const onSearch = async () => {
    data.loading = true
    data.dataList = await getData(start,pageCount,data.searchInput)
    data.loading = false
  }

  watch(
    ()=>data.searchInput,
    (newval)=>{
      clearTimeout(timeout)
      timeout = setTimeout(()=>{
        console.log(newval)
        data.searchInput = newval
        onSearch()
      },500)
    }
  )

  // watchEffect((onInvalidate)=>{
  //   console.log(data.searchInput)
  //   const apiCall = onSearch
  //   onInvalidate(()=>{
  //     console.log(10000)
  //     apiCall()
  //   })
  // })

  return {
    data,
    initData,
    onLoadMore,
    onSearch
  }
}

async function getData(start,pageCount,searchInput){
  try {
    const p = {
      query:`
        {
            goods(start:${start},count:${pageCount},name:"${searchInput}",desc:"${searchInput}"){
                id
                name
                price
                count
                gooddesc
                imgpath
                type {
                    id
                }
            }
        }
      ` 
    }
    let res = await HttpGql(p)
    return res.data.goods.map((item)=>{
      item.imgpath = ImgUrl + item.imgpath
      return item
    })
  } catch (e) {
    return []
  }
}

</script>

<style scoped>
.ant-input-search >>> .ant-input {
  border-radius: 8px !important;
}

</style>