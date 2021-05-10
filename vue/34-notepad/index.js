/*
function Foo(){}
new Foo() 创建一个实例
*/
new Vue({
    el:"#app",
    data:{
        title:"vue 记事本练习",
        listData:[
            {
                id:"1",
                title:"事项1",
                content:"事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容"
            },
            {
                id:"2",
                title:"事项2",
                content:"事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容"
            },
            {
                id:"3",
                title:"事项3",
                content:"事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容"
            },
        ],
        // id:"",
        // title:"",
        // content:"",
        formData:{
            id:"",
            title:"",
            content:"",
        }
    },
    methods:{ 
        del(id){
            // console.log(id)
            // this.list.splice(index,delcount)
            /*
                vue中，
                凡是vue的配置option属性时不要用箭头函数，因为这样会丢失 this
                在已知方法中的参数(callback),可以使用箭头函数
            */
            this.listData = this.listData.filter(item => item.id === id ? false : true)
        },
        delByIndex(index){
            this.listData.splice(index,1)
        },
        detail(obj){
            console.log(obj)
            console.log(JSON.stringify(obj)) // json obj to string
            console.log(JSON.parse(JSON.stringify(obj))) // string to json obj
            /*
                1.通过参数方式获取要修改的对象
                2.将修改的对象赋值到表单中
            */
            this.formData = JSON.parse(JSON.stringify(obj))
        },
        sub(){
            /*
                1.获取表单的内容
                2.将获取的内容组成一个对象
                3.将这个新对象追加的list数组
            */
            // console.log(this.id,this.title,this.content)
            // const obj = {
            //     id:this.id,
            //     title:this.title,
            //     content:this.content,
            // }
            // this.list.push(obj)
            // console.log(this.insertData)
            /*
                {
                    {
                        name:"zhangsan"
                    }
                }
                设计模式
                this.insertData 其实的被包裹,vue2.0 被观察的；vue3.0 被代理的
            
            */
            this.formData.id = Date.now().toString().substr(-5)
            this.listData.push(this.formData)
            this.formData = {
                id:"",
                title:"",
                content:""
            }
        },
        updateForm(){
            /*
                3.“重复”sub方法
                    a,判断此刻的对象中id是否存在于原有的list对象中
                        如果存在那么可以修改
                        不存在则提示
            */
            let flag = this.listData.some((item)=>{
                return item.id === this.formData.id
            })
            if(flag){
                // this -> vue
                // const that = this
                // this.list = this.list.map(function(item){
                //     // that -> vue
                //     if(item.id === that.formData.id){
                //         item = that.formData
                //     }
                //     return item
                // })
                this.listData = this.listData.map((item) => {
                    // this -> vue
                    if(item.id === this.formData.id){
                        item = this.formData
                    }
                    return item
                })
            }else{
                alert("该表单的id不存在在原有list中，请点击新增按钮")
            }
            
        }
        
    },
    //将组件局部注册到vue实例中
    components:{
        // "left-part":LeftPart,
        // "LeftPart":LeftPart,
        // LeftPart:LeftPart,
        LeftPart,
        RightPart
    }
})