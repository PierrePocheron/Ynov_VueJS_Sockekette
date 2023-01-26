<template>
  <div class="category">
    
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { getCategories } from "../../services/AppProductService";

const categories = ref([]);

onBeforeMount(async () => {
  categories.value = await getCategories();
});
</script>

<style lang="scss" scoped></style>
