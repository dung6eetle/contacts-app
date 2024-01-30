import Vue from "vue";
import VueRouter from "vue-router";
import AuthPage from "@/pages/AuthPage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AuthPage,
  },
  {
    path: "/contacts",
    beforeEnter: beforeEnterContacts,
    component: ContactsPage,
  },
];
function beforeEnterContacts(to, from, next) {
  const hasRole = localStorage.getItem("role");
  if (!hasRole) {
    return next("/");
  }
  next();
}

export default new VueRouter({
  routes,
  mode: "history",
});
