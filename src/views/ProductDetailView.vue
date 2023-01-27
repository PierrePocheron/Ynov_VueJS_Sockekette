<template>
  <div>
    <h1>Detail du produit</h1>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductDetail from "@/components/03 - Organismes/ProductDetail.vue";
import { useRoute } from "vue-router";
const route = useRoute();

const idProduct = route.params.id;
const product = ref();
const isLoading = ref(false);

const searchProductById = async () => {
  isLoading.value = true;
  try {
    const res = await fetch("https://fakestoreapi.com/products/" + idProduct);
    const json = await res.json();
    product.value = json;
  } catch {
    alert("An error occured!");
  }
  isLoading.value = false;
};

searchProductById();
</script>
