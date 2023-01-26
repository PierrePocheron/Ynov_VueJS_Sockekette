<template>
  <div>
    <h1>Product</h1>
    <div>
      <ProductDetails :product="product" />
    </div>
  </div>
</template>

<script setup>
import ProductDetails from "@/components/ProductDetails.vue";

const product = {
  name: "Product",
  price: null,
  grade: null,
  description: null,
  category: null,
  rating: {
    rate: null,
    count: null,
  },
};
</script>

<style lang="scss" scoped>
</style>
