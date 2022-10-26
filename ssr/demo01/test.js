import { createSSRApp } from "vue";

import { renderToString } from "vue/server-renderer"

const app = createSSRApp({
    data:() => ({count:1}),
    template: `<button @click="count++">{{ count }}</button>`
})

renderToString(app).then(html => console.log(html))