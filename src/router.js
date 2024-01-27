import Vue from "vue";
import VueRouter from "vue-router";
import AuthPage from "@/pages/authPage.vue";
import ContactsPage from "@/pages/contactsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AuthPage,
  },
  {
    path: "/contacts",
    component: ContactsPage,
  },
];

export default new VueRouter({
  routes,
  mode: "history",
});
