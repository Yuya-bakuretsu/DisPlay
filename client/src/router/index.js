import Vue from "vue";
import VueRouter from "vue-router";
import toppage from "../views/Toppage.vue";
import option from "../views/Option.vue";
import login from "../views/Signin.vue";

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
    path: "/Signin",
    name: "Signin",
    component: login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
