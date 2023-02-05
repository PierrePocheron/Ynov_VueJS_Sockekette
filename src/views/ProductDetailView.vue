<template>
  <AppLoading v-if="isLoading" />
  <div v-else class="product container">
    <div class="product__header">
      <AppButton @handleClick="router.back()">
        Retour a la page précedente
      </AppButton>
    </div>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import ProductDetail from "@/components/03 - Organismes/AppProductDetail.vue";
import AppButton from "../components/01 - Atoms/AppButton.vue";
import AppLoading from "../components/01 - Atoms/AppLoading.vue";
import { useRoute, useRouter } from "vue-router";
import { getProduct } from "../services/AppProductService";
const route = useRoute();
const router = useRouter();

const product = ref();
const isLoading = ref(false);

const searchProductById = async () => {
  isLoading.value = true;
  const idProduct = route.params.id;
  product.value = await getProduct(idProduct);
  isLoading.value = false;
};

onBeforeMount(searchProductById);
</script>

<style lang="scss" scoped>
.product {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
  }
}
</style>
