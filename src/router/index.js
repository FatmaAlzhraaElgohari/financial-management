import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FinancialBoxesView from "../views/FinancialBoxes.vue";
import CreateView from "../views/Create.vue";
import EditView from "../views/Edit.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create-box",
    name: "create-box",
    component: CreateView,
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
    path: "/edit-box",
    name: "edit-box",
    component: EditView,
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
