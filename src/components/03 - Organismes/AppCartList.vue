<template>
  <ul class="list">
    <AppCartItem
      v-for="product in props.products"
      :key="product"
      :product="product"
    />
  </ul>
</template>

<script setup>
import AppCartItem from "../02 - Molecules/AppCartItem.vue";
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.list {
  background-color: var(--clr-white);
  padding: 2rem;
}
</style>
