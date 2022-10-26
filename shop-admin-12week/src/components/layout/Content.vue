<template>
    <div class="content-bar">
        <slot></slot>
    </div>
</template>

<style scoped>
.content-bar {
    width:100%;
    height: calc(100vh - 60px);
}
</style>