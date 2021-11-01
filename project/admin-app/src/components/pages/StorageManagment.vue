<script setup>
import ProductList from "@/components/product/ProductList.vue";
import ProductEdit from "@/components/product/ProductDetail.vue";
</script>

<template>
    <div class="root">
        <div class="list">
            <product-list ></product-list>
        </div>
        <div class="edit">
            <product-edit></product-edit>
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