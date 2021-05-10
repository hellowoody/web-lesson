/*
    注册组件
    1.全局注册：Vue.component()
    2.局部注册：{
        compontents:{
            key:value
        }
    }
*/

new Vue({
    el:"#app",
    data:{
        title:"单页面记事本应用-Vue",
        list:[
            {
                id:"1",
                title:"事项1",
                content:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
            },
            {
                id:"2",
                title:"事项2",
                content:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
            },
            {
                id:"3",
                title:"事项3",
                content:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
            },
        ],
        formData:{
            id:"",
            title:"",
            content:""
        }
    },
    methods:{
        sub(){
            console.log("我接受到了子组件的广播")
            /*
                1.获取表单里的内容
                2.构造一个符合数组中元素结构的对象
                3.将新的对象追加的this.list数组中

                vue2.0 底层将data中声明属性通过观察者模式进行了包裹
                vue3.0 底层将data中声明属性通过代理模式进行了包裹
            */
            // console.log(this.formData)
            this.formData.id = Date.now().toString().substr(-3)
            this.list.push(this.formData)
            this.formData = {
                id:"",
                title:"",
                content:""
            }
        },
        del(index){
            this.list.splice(index,1)
        },
        delById(id){
            // this.list = this.list.filter(function(item){
            //     if(item.id === id){
            //         // remove
            //         return false // 此刻的item要移除
            //     }else{
            //         // stay
            //         return true // 此刻的item要保留
            //     }
            // })
            this.list = this.list.filter(item => item.id === id ? false : true)
        },
        detail(item){
            // a = {
            //     age:100
            // }
            // b = JSON.stringify(a) // "{age:100}"
            // c = JSON.parse(b)
            // {
            //     age:100
            // }
            // console.log(item) // {__ob__:observer}
            // console.log(JSON.stringify(item))
            // console.log(JSON.parse(JSON.stringify(item))) // {id:xx,title:xxx}
            this.formData = JSON.parse(JSON.stringify(item))

            // this.formData = Object.assign({},item)
            // Object.assign(this.formData,item)
        },
        update(){
            /*
                判断此刻表单中的id是否存在list数组中
                    如果存在：进行修改
                    如果不存在：不进行修改，同时提示请点击新增按钮进行提交
            */
            const flag = this.list.some((item) => {
                return item.id === this.formData.id
            })
            if(flag){
                // todo update
                this.list = this.list.map((item) => {
                    if(item.id === this.formData.id){
                        item = this.formData
                    }
                    return item
                })
            }else{
                alert("该id不存在于左侧列表中，请点击新增按钮进行添加")
            }
        }
    },
    components:{
        // "left-part":LeftPart,
        // "LeftPart":LeftPart,
        // "LeftPart":LeftPart,
        // LeftPart:LeftPart,
        LeftPart,
        RightPart,
    }
})