<template>
    <div class="top-bar">
         <slot></slot>
    </div>
</template>

<style scoped>
.top-bar {
    height: 60px;
    background: #363636;
    display: flex;
    color:#fff;
    justify-content: space-between;
    padding:0 20px;
    box-sizing: border-box;
    align-items: center;
}
</style>