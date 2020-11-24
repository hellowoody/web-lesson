<template>
    <div class="top-bar">
        <div class="left-wrapper">
            <slot name="left"></slot>
        </div>
        <div class="middle-wrapper">
            <slot name="middle">
                <input class="search-input" v-model="searchInput" @focus="onFocus" placeholder="输入你关心的内容"/>
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
        searchDefault:{
            type:String,
            default:""
        }
    },
    data(){
        return {
            searchInput:this.searchDefault,
            test1:"zhang",
            test2:1000
        }
    },
    methods:{
        onFocus(){
            console.log("input focus!")
            //页面跳转
            this.$emit("focusHandle")
        }
    },
    watch:{
        searchInput(newVal,oldVal){
            clearTimeout(this.timeout)
            this.timeout = setTimeout(()=>{
                console.log(newVal,oldVal)
                this.$emit("searchHandle",newVal)
            },500)
        }
    }
}

</script>

<style>
.top-bar {
    background-color: #9267fd;
    height: 60px;
    box-shadow: 0px 1px 2px rgb(40 40 40 / 0.2);
    display: flex;
    padding: 12px 16px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
}

.left-wrapper {
    color:#fff;
    width: 15%;
}

.middle-wrapper {
    width: 70%;
    height: 100%;
}

.right-wrapper {
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.search-input {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    box-sizing: border-box;
}
</style>