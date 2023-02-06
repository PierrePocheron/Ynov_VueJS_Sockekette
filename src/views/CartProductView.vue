<template>
  <div class="container">
    <template v-if="cartStore.cartItemsCount > 0">
      <div class="cart">
        <div class="cart__items">
          <AppHeading tag="h1" level="primary">
            🧺 Panier
            <AppParagraph level="tertiary">
              nombre items: {{ cartStore.cartItemsCount }}
            </AppParagraph>
            <AppParagraph level="tertiary">
              montant du panier:
              {{ formatNumberToPrice(cartStore.totalAmount) }}
            </AppParagraph>
          </AppHeading>
          <AppCartList :products="cartStore.items" />
          <div class="cart__action">
            <AppButton @handleClick="paymentProcess" class="cart__action">
              Payer
            </AppButton>
          </div>
        </div>
        <div class="cart__summary">
          <AppCartSummary :products="cartStore.items" />
        </div>
      </div>
    </template>
    <template v-else>
      <AppHeading tag="h1" level="primary" class="title"
        >🥲 Votre panier est vide.</AppHeading
      >
      <AppButton @handleClick="router.back()">
        Commencez votre shopping !
      </AppButton>
    </template>
  </div>
</template>

<script setup>
import AppHeading from "../components/01 - Atoms/AppHeading.vue";
import AppButton from "../components/01 - Atoms/AppButton.vue";
import AppParagraph from "../components/01 - Atoms/AppParagraph.vue";
import AppCartList from "../components/03 - Organismes/AppCartList.vue";
import AppCartSummary from "../components/03 - Organismes/AppCartSummary.vue";
import { useCartStore } from "@/stores/cart";
import { formatNumberToPrice } from "@/utils/formatNumber";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const router = useRouter();

function paymentProcess() {
  cartStore.resetCartStore();
  router.push({ name: "payment" });
}
</script>

<style scoped lang="scss">
.title {
  padding: 8% 0 8% 0;
}
.cart {
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  &__items {
    flex: 3;
    position: sticky;
    top: 0;
  }

  &__summary {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;
  }

  &__info {
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__action {
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
