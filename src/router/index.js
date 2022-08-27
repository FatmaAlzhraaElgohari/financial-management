import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FinancialBoxesView from "../views/FinancialBoxes.vue";
import CreateEditView from "../views/CreateEdit.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create-edit-box",
    name: "create-edit-box",
    component: CreateEditView,
  },
  {
    path: "/financialBoxes",
    name: "financialBoxes",
    component: FinancialBoxesView,
  },
  {
    path: "/view-box",
    name: "view-box",
    component: FinancialBoxesView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
