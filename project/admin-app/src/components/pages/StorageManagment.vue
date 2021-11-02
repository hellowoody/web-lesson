<script setup>
import ProductList from "@/components/product/ProductList.vue";
import ProductDetail from "@/components/product/ProductDetail.vue";
</script>

<template>
    <div class="root">
        <div class="list">
            <product-list ></product-list>
        </div>
        <div class="edit">
            <product-detail></product-detail>
        </div>
    </div>
</template>

<style scoped>
.root {
    display:flex;
}

.list {
    flex:1;
    border-right: 1px solid #eaeaea;
    padding:16px;
    box-sizing: border-box;
}

.edit {
    flex:1;
    padding:16px;
}
</style>