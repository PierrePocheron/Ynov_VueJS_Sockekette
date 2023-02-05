<template>
  <Teleport to="body">
    <div class="loading">
      <div class="loading__dot loading__dot--one"></div>
      <div class="loading__dot loading__dot--two"></div>
      <div class="loading__dot loading__dot--three"></div>
    </div>
  </Teleport>
</template>

<script setup></script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  &__dot {
    width: 2rem;
    height: 2rem;
    background-color: var(--clr-primary);
    border-radius: 50%;
    margin: 0 5px;
    animation-name: up-and-down;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    &--two {
      animation-delay: 0.3s;
    }

    &--three {
      animation-delay: 0.6s;
    }
  }
}
</style>
