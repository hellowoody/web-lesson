<template>
    <div class="product-edit">
        <div class="pic"></div>
        <div class="wrapper-right">
            <div style="font-size:14px;color:rgb(0 0 0 / 0.5);font-weight:bold;">
                {{product.name}}
            </div>
            <div style="font-size:14px;color:#FA6400;">
                {{showPrice}}
            </div>
            <div style="display:flex">
                <div class="btn" @click="decrease">-</div>
                <div style="margin:1px 10px 0px 10px">{{product.countbuy}}</div>
                <div class="btn" @click="increase">+</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ProductEdit",
    props:{
        index:Number,
        product:Object
    },
    methods:{
        increase(){
            this.$store.dispatch("increaseCart",this.index)
        },
        decrease(){
            this.$store.dispatch("decreaseCart",this.index)
        }
    },
    computed:{
        showPrice(){
            return "¥ " + this.product.price * this.product.countbuy   
        }
    }
}
</script>

<style scoped>

.product-edit {
    display:flex;
    background-color: #fff;
    justify-content: space-between;
    padding:12px 24px 12px 24px;
}

.pic {
    flex:1;
    background-color:#e5e5e5;
    height:75px;
    width:75px;
    border-radius: 10px;
}

.wrapper-right {
    flex:3;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 24px;
}

.btn {
    box-shadow: 0px 3px 5px rgb(40 40 40 /0.2);
    padding: 6px;
    width: 21px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

</style>