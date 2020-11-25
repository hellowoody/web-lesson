import {createStore} from 'vuex'
import { Http } from '@/kits/HttpMock.js'
export const store = createStore({
    state(){
        return {
            count:0,
            data:{
                name:"小明"
            },
            dataList:[]
        }
    },
    //同步方法/线性方法
    mutations:{
        add(state){
            state.count++
        },
        sub(state){
            state.count--
        },
        updateDataList(state,obj){
            state.dataList = obj
        }
    },
    //异步方法
    actions:{
        async getDataList(context){
            try {
                const res = await Http("/dataList",{
                    count:3
                })
                context.commit("updateDataList",res.data)
            } catch (err) {
                console.log(err)
            }
        }
    },
    getters:{
        dataEng(){
            return {
                name:"xiaoming"
            }
        }
    }
})