<template>
  <div class="product">
    <div class="product-img">
      <img v-if="product.image" :src="product.image" :alt="product.name" />
      <IconProduct v-else />
    </div>
    <div class="product-label">
      {{ product.name }}
    </div>
    <p>{{ product.price }}</p>
    <p>{{ product.grade }}</p>
    <p>{{ product.description }}</p>
    <p>{{ product.category }}</p>
    <p>{{ product.rating.rate }}</p>
    <p>{{ product.rating.count }}</p>
    <div>
      <IconCart />
      <a>Add to cart</a>
    </div>
  </div>
</template>

<script setup>
import IconProduct from "@/components/IconProduct.vue";
import IconCart from "@/components/IconCart.vue";
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const product = computed(() => props.product);
</script>

<style scoped>
</style>