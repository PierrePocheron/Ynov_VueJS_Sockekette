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
      component: () => import("@/components/CartProduct.vue"),
    },
    {
      path: "/paiement",
      name: "payment",
      component: () => import("@/views/AppPayment.vue"),
    },
    {
      path: "/produits/categories/:category",
      name: "products-category",
      component: () => import("@/components/ProductCategory.vue"),
    },
    {
      path: "/produits",
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
