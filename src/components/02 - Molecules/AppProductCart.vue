<template>
  <div class="product">
    <div class="product__img">
      <div class="product__visuel">
        <img v-if="product.image" :src="product.image" :alt="product.title" />
        <IconProduct v-else />
      </div>
      <div class="product__addToCart">
        <CartItemQuantity :item="product" />
      </div>
    </div>
    <div class="product__info">
      <AppHeading tag="h4" level="quaternary">{{ product.title }}</AppHeading>
      <div class="product__detail">
        <AppStarRating :value="Math.floor(product.rating.rate)" />
        <AppParagraph level="secondary">
          {{ formatNumberToPrice(product.price) }}
        </AppParagraph>
      </div>

      <div class="product__actions">
        <AppButton
          theme="primary"
          tag="router-link"
          :to="{
            name: 'product-detail',
            params: { id: product.id },
          }"
        >
          Details
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CartItemQuantity from "@/components/02 - Molecules/CartItemQuantity.vue";
import IconProduct from "@/components/icons/IconProduct.vue";
import AppParagraph from "@/components/01 - Atoms/AppParagraph.vue";
import AppHeading from "@/components/01 - Atoms/AppHeading.vue";
import AppButton from "@/components/01 - Atoms/AppButton.vue";
import AppStarRating from "../01 - Atoms/AppStarRating.vue";
import { formatNumberToPrice } from "@/utils/formatNumber";

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
  background-color: var(--clr-light-grey);
  display: flex;
  flex-direction: column;

  &__img {
    width: 100%;
    height: 30rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &__visuel {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__info {
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__actions {
    margin-top: auto;
    padding-top: 2rem;
    display: flex;
    justify-content: flex-end;
  }

  &__detail {
    margin-top: 2rem;
  }

  &__addToCart {
    z-index: 2;
    align-self: flex-end;
    margin-top: auto;
    padding-right: 2rem;
  }
}
</style>
