<template>
    <div class="footer-bar">
        <slot></slot>
    </div>
</template>
<style scoped>
.footer-bar {
    position:fixed;
    bottom:0;
    height:58px;
    background: #fff;
    width: 100%;
    box-shadow:0 0 8px rgb(0 0 0 / 0.2);
    display: flex;
}
</style>