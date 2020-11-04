import {createApp} from 'vue';
import App from './App.vue';
import { router } from './router' 
import {useAntD} from './antd'

// createApp(App).use(Button).mount('#app')
const app = createApp(App);
app.use(router)
useAntD(app);
app.mount("#app");