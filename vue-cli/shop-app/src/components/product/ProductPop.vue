<template>
    <div class="pop-good" @click="goto">
        <div class="pop-good-left">
            <div class="pop-good-sort" :class="product.sortClass"></div>
            <div class="pop-good-detail">
                <div style="font-weight:bold">{{product.name}}</div>
                <div style="font-size: 13px;">{{product.gooddesc}}</div>
            </div>
        </div>
        <img :src="product.imgpath" class="pop-good-right">
    </div>
</template>

<script>
export default {
    name:"ProductPop",
    props:{
        product:Object
    },
    methods:{
        goto(){
            this.$store.commit("addSelectedGoods",{
                id:this.product.id,
                type:this.product.type.id
            })

            this.$router.push({
                path:'/gooddetail/'+this.product.id
            })
        }
    }
}
</script>

<style scoped>
.pop-good {
    display:flex;
    justify-content: space-between;
    margin-top:16px;
    background-color: #fff;
    box-shadow: 3px 1px 8px #e3e3e3;
    border-radius: 12px;
    padding: 8px;
    color:rgb(0 0 0 /0.5);
}

.pop-good-left {
    display:flex;
}

.pop-good-sort {
    font-size: 32px;
    align-items: center;
    display: flex;
    color: #F7B500;
}

.pop-good-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left:16px;
}

.pop-good-right {
    width:50px;
    height:50px;
    object-fit: cover;
}

</style>