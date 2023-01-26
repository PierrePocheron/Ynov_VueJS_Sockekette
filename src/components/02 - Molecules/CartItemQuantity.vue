<script setup>
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";

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

<template>
  <span v-if="itemQuantity > 0">
    <span @click="addToCart(-1)">-</span>
    <span>{{ itemQuantity }}</span>
    <span @click="addToCart(1)">+</span>
  </span>

  <button v-else @click="addToCart(1)">Ajouter au panier</button>
</template>
