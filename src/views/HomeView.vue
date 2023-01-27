<template>
  <div class="container">
    <AppHero />
  </div>
  <AppSlider
    :slides="[
      '/images/nike.png',
      '/images/adidas.svg',
      '/images/chanel.svg',
      '/images/hm.svg',
      '/images/rebook.svg',
      '/images/coq.svg',
      '/images/puma.svg',
    ]"
  />
  <AppCardCategory />
</template>

<script setup>
import AppHero from "@/components/03 - Organismes/AppHero.vue";
import AppSlider from "@/components/03 - Organismes/AppSlider.vue";
import AppCardCategory from "@/components/03 - Organismes/AppCardCategory.vue";
</script>

<style lang="scss" scoped></style>
