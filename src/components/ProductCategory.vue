<script setup>
import { useRoute } from "vue-router";
import { slugify } from "@/utils/slugify";
import { onMounted, ref, watch } from "vue";
import CartItemQuantity from "@/components/CartItemQuantity.vue";
import { useCartStore } from "@/stores/cart";
import { formatNumberToPrice } from "@/utils/formatNumber";

const categories = [
  { label: "electronics", slug: "electronics" },
  { label: "jewelery", slug: "jewelery" },
  { label: "men's clothing", slug: slugify("men's clothing") },
  { label: "women's clothing", slug: slugify("women's clothing") },
];

const cartStore = useCartStore();
const route = useRoute();
const isValidCategory = ref(false);
const currentCategory = ref(null);
const products = ref([]);

onMounted(loadProductsByCategory);

async function loadProductsByCategory() {
  const categoryParams = route.params.category;
  const category = categories.find((c) => c.slug === categoryParams);

  if (!category) {
    isValidCategory.value = false;
  } else {
    isValidCategory.value = true;
    currentCategory.value = category;
    const res = await fetch(
      "https://fakestoreapi.com/products/category/" + category.label
    );
    const json = await res.json();
    products.value = [...json];
  }
}

watch(route, (to) => {
  loadProductsByCategory();
});
</script>

<template>
  <template v-if="isValidCategory">
    <h1>Liste des produits de la catégorie : {{ currentCategory.label }}</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="product.image" alt="image du produit" />
        <span>{{ product.title }}</span>
        <span>{{ formatNumberToPrice(product.price) }}</span>
        <CartItemQuantity :item="product" />
      </li>
    </ul>
  </template>
  <h1 v-else>Cette catégorie n'existe pas !</h1>
</template>

<style scoped>
li img {
  width: 100px;
  height: auto;
}
</style>
