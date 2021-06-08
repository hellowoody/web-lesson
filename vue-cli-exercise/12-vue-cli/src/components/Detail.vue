<template>
    <div class="right-part">
        <a-form-model layout="horizontal" :model="formdata" >
            <a-form-model-item label="ID">
                <a-input disabled v-model="formdata.id" />
            </a-form-model-item>
            <a-form-model-item label="标题">
                <a-input v-model="formdata.title" placeholder="请输入title" />
            </a-form-model-item>
            <a-form-model-item label="内容">
                <a-textarea v-model="formdata.content" allow-clear placeholder="请输入内容" />
            </a-form-model-item>
            <a-form-model-item v-bind:wrapper-col="buttonItemLayout.wrapperCol">
                <a-button v-if="flag === 'create'" type="primary" v-on:click="sub">新增</a-button>
                <a-button v-else  type="primary" v-on:click="update">修改</a-button>
                <a-button  v-on:click="back">返回</a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>

export default {
    name:"Detail",
    data(){
        return {
            buttonItemLayout:{
                wrapperCol: { span: 14, offset: 0 }
            },
            formdata:{},
            data:123,
            flag:"",
        }
    },
    // 生命周期 hook function
    created(){
        // this.$route    本次路由 当前正在激活的路由
        // this.$router   全局路由 有一个属性 currentRoute
        // console.log(1000,this)
        // console.log(this.$route.query.id)  // id = 3
        // console.log(this.$store.state.dataList) // vuex dataList []
        // console.log(this.$store.getters.newName) 
        // console.log(this.$store.getters.formdata(this.$route.query.id)) 
        /*
            函数里的作用域
        */ 
        // this.formdata = this.$store.state.dataList.filter((item) => {
        //     console.log(2000,this)
        //     return item.id === this.$route.query.id ? true : false
        // })[0]
        // const abc = this
        // this.formdata = this.$store.state.dataList.filter(function(item){
        //     console.log(2000,this,abc)
        //     return item.id === abc.$route.query.id ? true : false
        // })[0]
        if(this.$route.query.id) {
            //修改
            this.flag = "update"
            this.formdata = this.$store.getters.formdata(this.$route.query.id)
        }else{
            //新增
            this.flag = "create"
            console.log(1000)
        }
        
    },

    /*
        function foo(){
            // this 指向的是调用者(最后调用者)的作用域
            console.log(this) // window
        }
        
        const bar = () => {
            // ES6 箭头函数中this(作用域)永远指向上一层作用域
            console.log(this) // window
        }
    
    */

    mounted(){

    },
    methods:{
        sub(){
            this.formdata.id = Date.now().toString().substr(-3)
            this.$store.commit("subFormdata",this.formdata)
            this.formdata = {
                id:"",
                title:"",
                content:""
            }
            this.$notification.open({
                message:"恭喜",
                description:"新增成功",
                icon: h => h("a-icon",{
                    props:{
                        type:"check-circle",
                        theme:"twoTone",
                        "two-tone-color":"#52c41a"
                    }
                }),
            })
            this.$router.go(-1)
        },
        update(){
            this.$store.commit("updateFormdata",this.formdata)
        },
        back(){
            this.$router.go(-1)
        },
    }
}
</script>

<style scoped>
.right-part {
    width:100%;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 1px 8px rgb(10 10 10 / 0.1);
    padding:16px;
    box-sizing: border-box;
}
</style>