<template>
    <my-content :refreshFunc="refresh" pull>
        <div class="title">
            订单信息
        </div>
        <a-list size="large" style="margin-top:24px;" :data-source="listData" >
            <a-list-item slot="renderItem" slot-scope="item" @click="goto('orderdetail',item)">
                <div class="order">
                    <div class="frist-row">
                        <div>{{item.status.name}}</div>
                    </div>
                    <div class="row">
                        <div>订单:</div>
                        <div>{{item.id}}</div>
                    </div>
                    <div class="row">
                        <div>创建订单时间:</div>
                        <div>{{item.orderdate}}</div>
                    </div>
                    <div class="row">
                        <div>购买了几种商品:</div>
                        <div>{{item.goodcount}} 种</div>
                    </div>
                    <div class="row">
                        <div>订单总价:</div>
                        <div>¥ {{item.price}}</div>
                    </div>
                </div>
            </a-list-item>
        </a-list>
    </my-content>
</template>

<script>
import MyContent from '@/components/content/MyContent';
import {HttpGql} from '@/kits/Http';
import {getCacheVal} from '@/kits/LocalStorage'

export default {
    name:"Order",
    components:{
        MyContent,
    },
    data(){
        return {
            listData:[],
            start:0,
            count:5,
        }
    },
    created(){
        this.getData()
    },
    methods:{
        goto(name,item){
            this.$store.commit("setSelectedOrder",item)
            this.$router.push({name})
        },
        async getData(){
            try {
                const p = {
                    query:`
                        {
                            userOrder(userid:"${getCacheVal("userid")}",start:${this.start},count:${this.count}){
                                id
                                price
                                orderdate
                                goodcount
                                status {
                                 name
                                },
                                goodList {
                                    id
                                    name
                                    price
                                    imgpath
                                    type {
                                        id
                                    }
                                    gooddesc
                                    countbuy
                                }
                            }
                        }
                    `
                }
                let res = await HttpGql(p)
                this.listData = res.data.userOrder
                return true
            } catch (e) {
                return false
            }
        },
        refresh(){
            this.start = 0 ;
            return this.getData()
        }
    }
}
</script>

<style scoped>

.title {
    margin-top:36px;
    color:rgb(0 0 0 / 0.5);
    font-size:16px;
    font-weight: bold;
}

.order {
    display:flex;
    flex-direction: column;
    width:100%;
    background-color: #fff;
    box-shadow: 0px 1px 8px #e3e3e3;
    border-radius: 12px;
    padding:8px;
}

.row {
    display:flex;
    justify-content: space-between;
    margin-top:8px;
    font-size: 13px;
}

.frist-row {
    display:flex;
    justify-content: flex-end;
    font-size: 15px;
    color:rgb(250, 100, 0);
    margin-top:8px;
}


</style>