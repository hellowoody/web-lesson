<template>
    <div class="top-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
             <slot name="middle">
                <a-input ref="searchinput" v-model="searchContent"  size="large" @focus="focusFunc" placeholder="请输入查询内容">
                    <a-icon slot="prefix" type="edit" />
                </a-input>
             </slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'TopBar',
    props:{
        focusFunc:{
            type:Function,
            default:function(){}
        },
    },
    data(){
        return {
            searchContent:"",
            timeout:null,
        }
    },
    methods:{
    },
    watch:{
        searchContent:function(newVal){
            clearTimeout(this.timeout)
            this.timeout = setTimeout(()=>{
                console.log(newVal)
                this.$emit("searchInputChangeHandle",newVal)
            },500)
        }
    }
}
</script>

<style>
.top-bar {
    background-color:#fff;
    height:60px;
    box-shadow: 0px 1px 2px rgba(40,40,40,0.2);
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 18px 0px 18px;
}

.middle {
    width:80%;
}

.ant-input {
    background-color : rgb(172 172 172 / 0.1) !important;
    border: none !important;
    border-radius: 8px !important;
}

</style>