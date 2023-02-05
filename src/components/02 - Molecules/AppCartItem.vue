<template>
  <li class="item">
    <img :src="props.product.image" alt="image du produit" class="item__img" />
    <AppParagraph>{{ props.product.title }}</AppParagraph>
    <AppParagraph>{{ formatNumberToPrice(props.product.price) }}</AppParagraph>
    <CartItemQuantity :item="props.product" />
    <AppButton
      @handleClick="cartStore.removeItem(props.product)"
      class="item__action"
    >
      Supprimer
    </AppButton>
  </li>
</template>

<script setup>
import CartItemQuantity from "@/components/02 - Molecules/CartItemQuantity.vue";
import AppButton from "@/components/01 - Atoms/AppButton.vue";
import AppParagraph from "@/components/01 - Atoms/AppParagraph.vue";
import { formatNumberToPrice } from "@/utils/formatNumber";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

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

  &__action {
    margin-left: auto;
  }
}
</style>
