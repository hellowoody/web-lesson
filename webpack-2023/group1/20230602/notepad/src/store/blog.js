import { defineStore } from "pinia"


export const useBlog = defineStore("blog",{
    state(){
        return {
            list:[
                {id:1,title:"111",content:"aaa"},
                {id:2,title:"222",content:"bbb"},
                {id:3,title:"333",content:"ccc"},
            ]
        }
    },
    actions:{
        modify(newBlog){
            this.list = this.list.map((item) => {
                // console.log(item.id,newBlog.id)
                if(item.id == newBlog.id){
                    item = newBlog
                }
                return item
            })
        }
    }
})