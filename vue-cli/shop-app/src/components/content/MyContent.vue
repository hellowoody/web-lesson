<template>
    <div class="my-content">
        <slot></slot>
    </div>
</template>

<style scoped>

.my-content {
    padding:24px;
    height: 100vh;
    overflow-x:hidden; /* 防止横向滚动条 */
    margin-bottom: 55px;
}

</style>