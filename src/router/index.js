import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/CartProductView.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("@/views/AppPaymentView.vue"),
    },
    {
      path: "/products/categories/:category",
      name: "products-category",
      component: () => import("@/views/ProductCategoryView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/ProductListView.vue"),
    },
    {
      path: "/product/:id",
      name: "product-detail",
      component: () => import("@/views/ProductDetailView.vue"),
    },
  ],
});

export default router;
