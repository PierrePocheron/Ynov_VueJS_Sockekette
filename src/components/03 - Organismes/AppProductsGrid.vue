<template>
  <div class="grid" v-if="props.products.length > 0">
    <AppProductCart
      v-for="product in props.products"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else>Aucun produit ne correspond à votre recherche.</div>
</template>

<script setup>
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
