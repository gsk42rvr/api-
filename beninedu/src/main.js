import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {createPinia} from "pinia";
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import "./assets/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"
import "./assets/sneat/assets/js/main.js"
const app = createApp(App);

app.use(router, PerfectScrollbar);
app.use(createPinia())
app.mount("#app");