<script setup>
import { onMounted } from "vue";
import { useCartStore } from "@/stores/cart";
import CartItemQuantity from "@/components/CartItemQuantity.vue";
import { formatNumberToPrice } from "@/utils/formatNumber";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const router = useRouter();

onMounted(loadProducts);

async function loadProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const json = await res.json();
  const products = [...json];
  products.forEach((p) => {
    p.quantity = 1;
    p.amount = p.price;
  });
  cartStore.loadProductsInStore(products);
}

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
    <h1>Vous n'avez pas encore de produit dans votre panier, radin!!!!!</h1>
  </template>
</template>

<style scoped>
li img {
  width: 100px;
  height: auto;
}
</style>
