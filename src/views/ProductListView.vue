<template>
  <div>
    <h1>Products</h1>
    <div v-if="isLoading">Loading ...</div>
    <ul v-else class="productList">
      <li v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductItem from "@/components/ProductItem.vue";

const products = ref([]);
const isLoading = ref(false);

const searchProducts = async () => {
  isLoading.value = true;
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=10");
    const json = await res.json();
    products.value = [...json];
  } catch {
    alert("An error occured!");
  }
  isLoading.value = false;
};
searchProducts();
</script>
