<template>
  <div class="product-managment">
    <div class="product-list">
      <product-list />
    </div>
    <div class="product-edit">
      <product-edit />
    </div>
  </div>
</template>

<script>
import ProductList from '/@/components/product/ProductList.vue'
import ProductEdit from '/@/components/product/ProductEdit.vue'

export default {
    name:"GoodManagment",
    components:{
      ProductList,
      ProductEdit
    }
}
</script>

<style>

.product-managment {
  display:flex;
}

.product-list {
  border-right: 1px solid rgb(217, 217, 217);
  padding-right: 16px;
  flex:3
}

.product-edit {
  flex:2;
  margin-left:16px;
}

</style>