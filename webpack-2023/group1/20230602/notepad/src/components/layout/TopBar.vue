<template>
    <div class="top-bar">
        <slot></slot>
    </div>
</template>
<style scoped>
.top-bar {
    height:60px;
    background: #363636;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
}

</style>