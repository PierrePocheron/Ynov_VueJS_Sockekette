<template>
  <li class="item">
    <AppParagraph>{{ props.product.title }}</AppParagraph>
    <AppParagraph>{{ formatNumberToPrice(props.product.amount) }}</AppParagraph>
  </li>
</template>

<script setup>
import AppParagraph from "@/components/01 - Atoms/AppParagraph.vue";
import { formatNumberToPrice } from "@/utils/formatNumber";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 0;
  flex-wrap: wrap;
  &:not(:first-child) {
    border-top: 1px solid var(--clr-dark-grey);
  }
  &:not(:last-child):not(:first-child) {
    border-bottom: 1px solid var(--clr-dark-grey);
  }

  &__img {
    width: 5rem;
    height: 5rem;
  }
}
</style>
