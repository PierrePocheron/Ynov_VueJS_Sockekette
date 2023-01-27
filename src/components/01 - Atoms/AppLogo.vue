<template>
  <div class="logo">
    <div class="logo__container">
      <img src="/Logo.svg" alt="logo" class="logo__img" />
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
  &__img {
    width: 5rem;
  }
}
</style>
