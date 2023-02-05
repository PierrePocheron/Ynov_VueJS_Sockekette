<template>
  <div class="detail">
    <div class="detail__img">
      <img v-if="product.image" :src="product.image" :alt="product.title" />
      <IconProduct v-else />
    </div>
    <div class="detail__info">
      <AppHeading tag="h1" level="secondary">{{ product.title }}</AppHeading>
      <div class="detail__action">
        <AppStarRating :value="Math.floor(product.rating.rate)" />
        <CartItemQuantity :item="product" />
      </div>
      <AppParagraph level="secondary">
        {{ formatNumberToPrice(product.price) }}
      </AppParagraph>
      <AppParagraph level="secondary">
        {{ product.description }}
      </AppParagraph>
      <AppButton
        tag="router-link"
        :to="{
          name: 'products-category',
          params: { category: product.category },
        }"
      >
        {{ product.category }}
      </AppButton>
    </div>
  </div>
</template>

<script setup>
import IconProduct from "@/components/icons/IconProduct.vue";
import CartItemQuantity from "@/components/02 - Molecules/CartItemQuantity.vue";
import AppParagraph from "../01 - Atoms/AppParagraph.vue";
import AppHeading from "../01 - Atoms/AppHeading.vue";
import AppStarRating from "../01 - Atoms/AppStarRating.vue";
import { formatNumberToPrice } from "@/utils/formatNumber";
import AppButton from "../01 - Atoms/AppButton.vue";
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
.detail {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &__img {
    flex: 1;
    img {
      width: 100%;
    }
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  &__action {
    display: flex;
    justify-content: space-between;
  }
}
</style>
