import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/panier",
      name: "cart",
      component: () => import("@/views/CartProduct.vue"),
    },
    {
      path: "/paiement",
      name: "payment",
      component: () => import("@/views/AppPayment.vue"),
    },
    {
      path: "/produits/categories/:category",
      name: "products-category",
      component: () => import("@/views/ProductCategory.vue"),
    },
  ],
});

export default router;
