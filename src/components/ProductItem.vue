<template>
  <div class="product">
    <h2>{{ product.title }}</h2>
    <p>category : {{ product.category }}</p>
    <p>price : {{ product.price }}</p>
    <p>desc : {{ product.description }}</p>
    <p>rating count: {{ product.rating.count }}</p>
    <p>rating rate: {{ product.rating.rate }}</p>
    <div class="product-img">
      <img v-if="product.image" :src="product.image" :alt="product.title" />
      <IconProduct v-else />
    </div>

    <CartItemQuantity :item="product" />

    <routerLink
      :to="{
        name: 'products-detail',
        params: { id: product.id },
      }"
    >
      Details
    </routerLink>

    <br />
  </div>
</template>

<script setup>
import { computed } from "vue";
import CartItemQuantity from "@/components/CartItemQuantity.vue";
import IconProduct from "@/components/icons/IconProduct.vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const product = computed(() => props.product);
</script>

<style lang="scss" scoped>
.product {
  background: #eee;
  padding: 1rem;

  gap: 3rem;
  &-img {
    flex: 0 0 auto;
    background: #fff;
    width: 10rem;
    height: 10rem;
    display: grid;
    place-items: center;
  }
}
</style>
