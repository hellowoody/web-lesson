<template>
    <div class="tab-bar tab-bar-extend">
        <slot></slot>
    </div>
</template>

<style scoped>
.tab-bar {
    width:100%;
    height: 58px;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgb(0 0 0 / 0.5);
    position: fixed;
    bottom:0px;
    left:0px;
    right:0px;
}

.tab-bar-extend {
    display: flex;
    align-items: center;
}
</style>