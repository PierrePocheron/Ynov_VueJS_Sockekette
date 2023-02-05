<template>
  <ul class="list">
    <AppCartItemSummary
      v-for="product in props.products"
      :key="product"
      :product="product"
    />
  </ul>
  <AppParagraph level="tertiary">
    montant du panier:
    {{ formatNumberToPrice(cartStore.totalAmount) }}
  </AppParagraph>
</template>

<script setup>
import AppCartItemSummary from "../02 - Molecules/AppCartItemSummary.vue";
import AppParagraph from "../01 - Atoms/AppParagraph.vue";
import { useCartStore } from "@/stores/cart";
import { formatNumberToPrice } from "@/utils/formatNumber";

const cartStore = useCartStore();
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.list {
  position: sticky;
  top: 10rem;
  background-color: var(--clr-secondary);
  padding: 2rem;
  width: 100%;
}
</style>
