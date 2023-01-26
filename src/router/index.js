import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/panier",
      name: "cart",
      component: () => import("@/components/CartProduct.vue"),
    },
    {
      path: "/paiement",
      name: "payment",
      component: () => import("@/views/AppPayment.vue"),
    },
    {
      path: "/products",
      name: "product",
      component: () => import("@/views/ProductView.vue"),
    },
  ],
});

export default router;
