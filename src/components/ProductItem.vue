<template>
  <div>
    <h2>{{ product.title }}</h2>
    <div></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const product = computed(() => props.product);
</script>

<style lang="scss" scoped>
</style>