<template>
  <div class="product">
    <routerLink
      :to="{
        name: 'products',
      }"
    >
      Retour
    </routerLink>
    <div class="product-img">
      <img v-if="product.image" :src="product.image" :alt="product.title" />
      <IconProduct v-else />
    </div>
    <div class="product-label">
      {{ product.title }}
    </div>
    <p>{{ product.price }}</p>
    <p>{{ product.grade }}</p>
    <p>{{ product.description }}</p>
    <p>{{ product.category }}</p>
    <p>{{ product.rating.rate }}</p>
    <p>{{ product.rating.count }}</p>

    <CartItemQuantity :item="product" />
  </div>
</template>

<script setup>
// import IconProduct from "@/components/icons/IconProduct.vue";
import CartItemQuantity from "@/components/CartItemQuantity.vue";
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const product = computed(() => props.product);
</script>
