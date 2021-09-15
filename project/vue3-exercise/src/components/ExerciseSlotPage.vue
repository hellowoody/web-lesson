<template>
    <slot-comp>
        <h6>你好</h6>
    </slot-comp>
    <slot-name-comp>
        <!-- vue2.x的具名插槽用法 -->
        <!-- <div slot="left">111</div>
        <div slot="right">222</div> -->
        <!-- vue3.x的用法 -->
        <template v-slot:left>
            <div>111</div>
        </template>
        <template v-slot:right>
            <div>222</div>
        </template>
    </slot-name-comp>
</template>