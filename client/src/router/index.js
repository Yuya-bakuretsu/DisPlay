import Vue from "vue";
import VueRouter from "vue-router";
import toppage from "../views/Toppage.vue";
import option from "../views/Option.vue";
import login from "../views/Signin.vue";
import {store} from "../store/store"

Vue.use(VueRouter);

const routes = [
  {
    // TODO add login confirmation page
    path: "/",
    name: "Toppage",
    component: toppage,
  },
  {
    path: "/option",
    name: "Option",
    component: option,
  },
  {
    path: "/signin",
    name: "Signin",
    component: login,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let tokenValue;
  if (document.cookie) {
    tokenValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token"))
      .split("=")[1];
      store.token = "jwt " + tokenValue
  }
  if (to.name !== "Signin" && !tokenValue) next({ name: "Signin" });
  else next();
});

export default router;
