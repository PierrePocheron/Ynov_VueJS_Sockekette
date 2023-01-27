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
      path: "/cart",
      name: "cart",
      component: () => import("@/views/CartProduct.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("@/views/AppPayment.vue"),
    },
    {
      path: "/products/categories/:category",
      name: "products-category",
      component: () => import("@/views/ProductCategory.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/ProductListView.vue"),
    },
    {
      path: "/products/:id",
      name: "products-detail",
      component: () => import("@/views/ProductDetailView.vue"),
    },
  ],
});

export default router;
