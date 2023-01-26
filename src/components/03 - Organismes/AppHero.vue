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
        <AppButton tag="router-link">Shop now</AppButton>
      </div>
    </div>
    <div class="hero__illustration">
      <img src="/images/course1.jpeg" class="hero__img hero__img--1" />
      <img src="/images/course1.jpeg" class="hero__img hero__img--2" />
      <img src="/images/course1.jpeg" class="hero__img hero__img--3" />
      <img src="/images/course1.jpeg" class="hero__img hero__img--4" />
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
  gap: 5rem;
  min-height: 50vh;

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__illustration {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &--1 {
      grid-column: 1/2;
      grid-row: 1/3;
      border-radius: 5rem 0 5rem;
    }

    &--2 {
      grid-column: 2/3;
      grid-row: 1/2;
    }

    &--3 {
      grid-column: 2/3;
      grid-row: 2/3;
    }

    &--4 {
      grid-column: 3/4;
      grid-row: 1/3;
      border-radius: 0 5rem 0;
    }

    &--2,
    &--3 {
      border-radius: 0 5rem 0;
    }
  }

  &__actions {
    margin-top: 3rem;
    display: flex;
    align-items: flex-start;
  }
}
</style>
