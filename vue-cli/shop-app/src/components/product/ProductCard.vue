<template>
    <div class="product-card">
        <div class="product-img" :style="imgStyle"></div>
        <div class="product-desc">
            <div style="color:rgb(0 0 0 / 0.5)">
                {{product.name}}
            </div>
            <div style="color:#FA6400;">
                {{price}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ProductCard",
    props:{
        product:Object
    },
    computed:{
        price(){
            return "¥ "+this.product.price
        },
        imgStyle(){
            return {
                backgroundImage: `url(${this.product.imgpath})`,
                backgroundSize: 'cover'
            }
        }
    }
}
</script>

<style scoped>
.product-card {
    background-color: #fff;
    height:167px;
    width:138px;
    border-radius: 15px;
}

.product-img {
    background-color: #e5e5e5;
    height: 107px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.product-desc {
    padding:12px;
    display:flex;
    flex-direction: column;
    font-size:14px
}
</style>