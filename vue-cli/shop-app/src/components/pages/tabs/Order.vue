<template>
    <my-content>
        <div class="title">
            订单信息
        </div>
        <a-list size="large" style="margin-top:24px;" :data-source="listData">
            <a-list-item slot="renderItem" slot-scope="item">
{{item}}
            </a-list-item>
        </a-list>
    </my-content>
</template>

<script>
import MyContent from '@/components/content/MyContent';

const listData = [

]

export default {
    name:"Order",
    components:{
        MyContent,
    },
    data(){
        return {
            listData,
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

</style>