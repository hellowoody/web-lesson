/*

1. vue中双向绑定的两种方式

    <input :value="msg" @input="handle" />

    js 
        const Comp = {
            data(){
                return {
                    msg:""
                }
            },
            methods:{
                handle(e){
                    this.msg = e.target.value
                }
            }
        }
    

        <input v-model:value="msg" />

        js:

            const Comp = {
                data(){
                    return {
                        msg:""
                    }
                }
            }
    

2. js的内置对象proxy如何使用

    const obj = {
        name:"zhang"
    }

    const config = {
        get(o,prop){
            return o[prop]
        },
        set(o,prop,new_value){
            /
                dom tag innerHTML
            /
            return o[prop] = new_value
        }
    }

    const obj_proxy = new Proxy(obj,config)

    obj.name = "LI"
    obj_proxy.name = "李"

3. vue的复选框 用什么内部指令进行变量绑定，变量的类型支持哪几种

    v-model="xxx"

    xxx 数组 Boolean 

    const Comp = {
        data(){
            return {
                xxx:[],
                xxx:false | true,
            }
        }
    }

4. vue的单选按钮 用什么内部指令进行变量绑定，变量的类型支持哪几种

        <input type="radio"  v-model="xxx" name="a" value="male"   />男
        <input type="radio"  v-model="xxx" name="a" value="female" />女
        <input type="radio"  v-model="xxx" name="a" value="unknow" />

     v-model="xxx"

     xxx string

        const Comp = {
            data(){
                return {
                    xxx:"male",
                }
            }
    

5. v-for 循环时需要注意什么， 如何获取元素和索引

        <div v-for="(item,idx) in [1,2,3]" :key="idx" ></div>
        <div v-for="item in [1,2,3]" :key="item" ></div>
*/