import { createApp } from "vue";
import router from "./routes/router.js";

//import './style.css'
import App from "./App.vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

createApp(App).use(autoAnimatePlugin).use(router).mount("#app");
