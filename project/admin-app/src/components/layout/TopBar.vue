<template>
    <div class="root">
        <slot></slot>
    </div>
</template>

<style scoped>
.root {
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 8px #f1f2f3;
    background-color: #fff;
    height:60px;
    font-size:16px;
}
</style>