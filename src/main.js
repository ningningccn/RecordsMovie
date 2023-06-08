import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

// import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { authStateChanged } from "@/api.js";
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    // console.log("to.meta.requiresAuth: ", to.meta.requiresAuth);
    // console.log(`這需要認證`);
    const user = await authStateChanged();
    if (user) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    console.log("沒有登入");
    next();
  }
});

createApp(App).use(router).use(store).use(VueAxios, axios).mount("#app");
