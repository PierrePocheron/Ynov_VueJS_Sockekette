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
      // children: [
      //   {
      //     path: ":tag",
      //     name: "category",
      //     component: CategoryView,
      //     props: (route) => ({
      //       productId: route.params.tag,
      //       limit: route.query.limit || undefined,
      //     }),
      //   },
      // ],
    },
  ],
});

export default router;
