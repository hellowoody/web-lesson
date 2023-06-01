import {defineStore} from "pinia"


export const useBlog = defineStore("blog",{
    state(){
        return {
            list:[
                {id:1,title:"111",content:"aaaaaa"},
                {id:2,title:"222",content:"bbbbbbb"},
                {id:3,title:"333",content:"ccccccccccccc"},
            ]
        }
    }
})