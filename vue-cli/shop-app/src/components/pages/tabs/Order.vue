<template>
    <my-content :refreshFunc="refresh" pull>
        <div class="title">
            订单信息
        </div>
        <a-list size="large" style="margin-top:24px;" :data-source="listData">
            <a-list-item slot="renderItem" slot-scope="item">
                <div class="order">
                    <div>
                        <div>{{item.id}}</div>
                        <div>{{item.status.name}}</div>
                    </div>
                    <div>
                        <div>{{item.count}}</div>
                        <div>{{item.price}}</div>
                        <div>{{item.orderdate}}</div>
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
}

</style>