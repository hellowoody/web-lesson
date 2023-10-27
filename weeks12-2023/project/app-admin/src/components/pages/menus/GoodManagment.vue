<template>
    <div class="good-managment"> 
        <div class="list">
            <p-list></p-list>
        </div>
        <div class="edit">
            <p-edit></p-edit>
        </div>
    </div>
</template>
<style scoped>
.good-managment {
    display: flex;
    height: calc(100vh - 60px);
}

.list {
    flex:1;
    border-right: 1px solid #eaeaea;
    padding:12px;
    box-sizing: border-box;
    overflow-y: auto;
}

.edit {
    flex:1;
    overflow-y: auto;
    padding:12px;
    box-sizing: border-box;
}

::-webkit-scrollbar {
    display: none;
}
</style>