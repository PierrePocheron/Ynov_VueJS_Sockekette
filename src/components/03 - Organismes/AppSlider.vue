<template>
  <div class="slider" :style="[`--slide:${props.slides.length}`]">
    <div class="slider__track">
      <div class="slider__item" v-for="(slide, i) in props.slides" :key="i">
        <img :src="slide" height="100" width="250" alt="" />
      </div>
      <div class="slider__item" v-for="(slide, i) in props.slides" :key="i">
        <img :src="slide" height="100" width="250" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.slider {
  background-color: var(--clr-secondary);
  padding: 3rem 0;
  margin-top: 10rem;
  width: 100%;

  &__track {
    animation: scroll 40s linear infinite;
    display: flex;
    flex-wrap: nowrap;
    gap: 3rem;
  }

  &__item {
    img {
      object-fit: contain;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * var(--slide)));
  }
}
</style>
