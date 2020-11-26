<template>
  <div class="top-bar">
      <div class="left-wrapper">
          <slot name="left"></slot>
      </div>
      <div class="middle-wrapper">
          <slot name="middle">
              <input class="search-input" v-model="searchInput" @focus="onFocus" placeholder="请输入查询内容" >
          </slot>
      </div>
      <div class="right-wrapper">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>

export default {
    name:"TopBar",
    props:{
        searchInput:{
            type:String,
            value:""
        }
    },
    methods:{
        onFocus(){
            this.$emit("focusHandle")
        }
    },
    watch:{
        searchInput(newVal,oldVal){
            clearTimeout(this.timeout)
            this.timeout = setTimeout(()=>{
                // console.log(newVal,oldVal)
                this.$emit("searchHandle",newVal)
            },500)
        }
    }
}
</script>

<style>
.top-bar {
    height:60px;
    background-color: #9267FD;
    box-shadow: 0px 1px 2px rgba(40,40,40,0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:12px 16px;
    box-sizing: border-box;
}

.middle-wrapper {
    height:100%;
    width:80%;
}

.search-input {
    height:100%;
    width: 100%;
    border-radius: 10px;
    box-sizing: border-box;
}

.right-wrapper {
    color:#fff
}

</style>