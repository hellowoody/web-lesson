<template>
    <h2>具名插槽/命名插槽</h2>
    <div class="root">
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>

<style scoped>
.root {
    display: flex;
    justify-content: space-between;
}
</style>