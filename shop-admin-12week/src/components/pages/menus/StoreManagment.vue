<script setup>
import PList from "@/components/product/PList.vue"
import PEdit from "@/components/product/PEdit.vue"
</script>

<template>
    <div class="store-managment">
        <div class="list">
            <p-list />
        </div>
        <div class="edit">
            <p-edit />
        </div>
    </div>
</template>

<style scoped>
.store-managment {
    display:flex;
    height:calc(100vh - 60px);
}

.list {
    flex:1;
    overflow-y: auto;
    padding: 12px 12px 24px 12px;
    box-sizing: border-box;
    border-right: 1px solid #eaeaea;
}

.edit {
    flex:1;
    padding: 12px 12px 24px 12px;
    overflow-y: auto;
}

::-webkit-scrollbar {
    display: none;
}
</style>