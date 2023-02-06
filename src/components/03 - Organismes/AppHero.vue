<template>
  <div class="hero mt-5">
    <div class="hero__info">
      <AppParagraph class="fnt--bold" level="secondary">
        Trendy <span class="clr--primary">Collection</span>
      </AppParagraph>
      <AppHeading tag="h1">
        <span class="clr--primary">Shop For</span>
        What you want
      </AppHeading>
      <AppParagraph level="secondary" class="mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
        corporis porro, at nam explicabo suscipit pariatur ut quam vel eligendi
        expedita consectetur itaque perspiciatis aperiam ducimus dolore
        praesentium facilis eaque.
      </AppParagraph>
      <div class="hero__actions">
        <AppButton tag="router-link" :to="{ name: 'products' }"
          >Shop now</AppButton
        >
      </div>
    </div>
    <div class="hero__illustrations">
      <div class="hero__illustration hero__illustration--1">
        <img src="/images/hero-image-3.jpeg" class="hero__img" />
      </div>
      <div class="hero__illustration hero__illustration--2">
        <img src="/images/hero-image-1.jpeg" class="hero__img" />
      </div>
      <div class="hero__illustration hero__illustration--3">
        <img src="/images/hero-image-2.jpeg" class="hero__img" />
      </div>
      <div class="hero__illustration hero__illustration--4">
        <img src="/images/hero-image-4.jpeg" class="hero__img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppParagraph from "@/components/01 - Atoms/AppParagraph.vue";
import AppHeading from "@/components/01 - Atoms/AppHeading.vue";
import AppButton from "../01 - Atoms/AppButton.vue";
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  min-height: 30vw;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__illustrations {
    flex: 1;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;

    @media (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__illustration {
    &--1 {
      img {
        border-radius: 5rem 0 5rem;
      }
    }
    &--2,
    &--3,
    &--4 {
      img {
        border-radius: 0 5rem 0;
      }
    }

    @media (min-width: 992px) {
      &--1 {
        grid-column: 1/2;
        grid-row: 1/2;
      }

      &--4 {
        grid-column: 2/3;
        grid-row: 1/2;
      }
    }

    @media (min-width: 1200px) {
      &--1 {
        grid-column: 1/2;
        grid-row: 1/3;
      }

      &--4 {
        grid-column: 3/4;
        grid-row: 1/3;
      }
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__actions {
    margin-top: 3rem;
    display: flex;
    align-items: flex-start;
  }
}
</style>
