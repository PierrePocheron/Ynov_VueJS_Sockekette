<template>
  <div class="qty" v-if="itemQuantity > 0">
    <button @click="addToCart(-1)" class="qty__btn">-</button>
    <span class="qty__info">{{ itemQuantity }}</span>
    <button @click="addToCart(1)" class="qty__btn">+</button>
  </div>

  <AppButton v-else @handleClick="addToCart(1)">
    <template #icon>
      <IconAddToCart />
    </template>
  </AppButton>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";
import AppButton from "../01 - Atoms/AppButton.vue";
import IconAddToCart from "../icons/IconAddToCart.vue";

const cartStore = useCartStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

let itemQuantity = computed({
  get() {
    if (cartStore.cartItemsCount > 0) {
      const product = cartStore.items.find((i) => i.id === props.item.id);
      if (product) return product.quantity;
    }
    return 0;
  },
  set() {},
});

function addToCart(number) {
  const quantity = (itemQuantity.value += number);
  const itemData = {
    item: props.item,
    quantity: quantity,
  };
  cartStore.addItem(itemData);
}
</script>

<style lang="scss" scoped>
.qty {
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: var(--clr-primary);
  padding: 0.5rem;

  &__info {
    font-size: var(--font-size-xs);
    color: var(--clr-white);
  }

  &__btn {
    display: block;
    all: unset;
    border: 1px solid var(--clr-white);
    color: var(--clr-white);
    padding: 0.5rem;
  }
  &__btn:hover {
    cursor: pointer;
  }
}
</style>
