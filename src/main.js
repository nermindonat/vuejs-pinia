import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./assets/main.css";
import "./assets/css/tailwind.css";

createApp(App).use(createPinia()).mount("#app");
