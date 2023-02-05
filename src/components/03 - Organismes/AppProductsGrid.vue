<template>
  <div class="grid">
    <AppProductCart
      v-for="product in props.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import AppProductCart from "@/components/02 - Molecules/AppProductCart.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
}
</style>
