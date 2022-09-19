<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<style scoped>
.tab-bar {
    width:100%;
    height:58px;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgb(0 0 0 / 0.2);
    position: fixed;
    bottom:0;
    display: flex;
}
</style>