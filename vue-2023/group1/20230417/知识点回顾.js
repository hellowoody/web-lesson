/*

1. vue中双向绑定的两种方式 

    第一种方法：v-model 

    <input  v-model="content" />  
    // <input  v-model:value="xxx" />   不要这么写

    const Comp = {
        data(){
            return {
                content:""
            }
        }
    }


    第二种方法：v-bind v-on

    <input  v-on:input="handle" v-bind:value="content" />

    const Comp = {
        data(){
            return {
                content:""
            }
        }
        methods:{
            handle(e){
                this.content = e.target.value
            }
        }
    }


    v-bind:prop="xxx"    => :prop="xxx"
    v-on:eventName="xxx" => @eventName="xxx"
    v-bind v-on          => v-model="xxx"

2. js的内置对象proxy如何使用

    const obj = {
        name:"zhang"
    }

    const obj_p = new Proxy(obj)

3. vue的复选框 用什么内部指令进行变量绑定，变量的类型支持哪几种

    v-model
    // 爱好
    <input type="checkbox" v-model="skills" name="a" />
    <input type="checkbox" v-model="skills" name="a" />
    <input type="checkbox" v-model="skills" name="a" />
    // 特长
    <input type="checkbox" v-model="skills" name="b" />
    <input type="checkbox" v-model="skills" name="b" />


    <input type="checkbox" v-model="ifRead" />

    const Comp = {
        data(){
            return {
                // skills:[]
                ifRead:true | false
            }
        }
    }

4. vue的单选按钮 用什么内部指令进行变量绑定，变量的类型支持哪几种

       <input type="radio" v-model="gender" name="g" value="male"/> 男
       <input type="radio" v-model="gender" name="g" value="female"/> 女

        const Comp = {
            data(){
                return {
                    gender:"female"
                }
            }
        }


5. v-for 循环时需要注意什么， 如何获取元素和索引

        <div v-for="item in list" :key="item.id"> 

        <div v-for="(item,idx) in list" :key="idx"> 

        <div v-for="(v,k) in obj" :key="k"> 

       const Comp = {
            data(){
                return {
                    list:[
                        {
                            id:0001,
                            name:"zhang"
                        }
                    ],
                    obj:{
                        name:"zhang",
                        score:100
                    }
                }
            }
        }
*/