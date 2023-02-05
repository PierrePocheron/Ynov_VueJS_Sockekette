<template>
  <div class="product">
    <AppHeading tag="h1" level="primary">Detail du produit</AppHeading>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductDetail from "@/components/03 - Organismes/AppProductDetail.vue";
import AppHeading from "../components/01 - Atoms/AppHeading.vue";
import { useRoute } from "vue-router";
import { getProduct } from "../services/AppProductService";
const route = useRoute();

const product = ref();
const isLoading = ref(false);

const searchProductById = async () => {
  isLoading.value = true;
  const idProduct = route.params.id;
  product.value = getProduct(idProduct);
  isLoading.value = false;
};

searchProductById();
</script>
