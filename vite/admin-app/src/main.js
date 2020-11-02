import {createApp} from 'vue';
import App from './App.vue';
import {useAntD} from './antd'

// createApp(App).use(Button).mount('#app')
const app = createApp(App);
useAntD(app);
app.mount("#app");