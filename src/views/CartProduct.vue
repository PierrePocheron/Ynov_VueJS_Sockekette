<script setup>
import { useCartStore } from "@/stores/cart";
import CartItemQuantity from "@/components/02 - Molecules/CartItemQuantity.vue";
import { formatNumberToPrice } from "@/utils/formatNumber";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const router = useRouter();

function paymentProcess() {
  cartStore.resetCartStore();
  router.push({ name: "payment" });
}
</script>

<template>
  <template v-if="cartStore.cartItemsCount > 0">
    <h1>Panier</h1>
    <p>nb items: {{ cartStore.cartItemsCount }}</p>
    <p>montant du panier: {{ formatNumberToPrice(cartStore.totalAmount) }}</p>
    <ul>
      <li v-for="product in cartStore.items" :key="product.id">
        <img :src="product.image" alt="image du produit" />
        <span>{{ product.title }}</span>
        <span>{{ formatNumberToPrice(product.price) }}</span>
        <CartItemQuantity :item="product" />
        <button @click="cartStore.removeItem(product)">Supprimer</button>
        <span>{{ formatNumberToPrice(product.amount) }}</span>
      </li>
    </ul>
    <button @click="paymentProcess">Payer</button>
  </template>
  <template v-else>
    <h1>Votre panier est vide.</h1>
    <router-link :to="{ name: 'products' }"
      >Commencez votre shopping !</router-link
    >
  </template>
</template>

<style scoped>
li img {
  width: 100px;
  height: auto;
}
</style>
