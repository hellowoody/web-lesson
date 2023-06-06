<template>
    <div class="content">
        <slot></slot>
    </div>
</template>
<style scoped>
.content{
    height: calc(100vh - 60px - 30px);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>