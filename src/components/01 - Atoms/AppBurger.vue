<template>
  <div class="burger">
    <button class="burger__btn" :class="{ active }" @click="handleBurger">
      <svg
        stroke="var(--clr-dark-grey)"
        fill="none"
        class="burger__svg"
        viewBox="-10 -10 120 120"
        width="250"
      >
        <path
          class="burger__line"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(false);
const emit = defineEmits(["handleMenu"]);

const handleBurger = () => {
  active.value = !active.value;
  emit("handleMenu", active.value);
};
</script>

<style lang="scss" scoped>
.burger {
  @media (min-width: 768px) {
    display: none;
  }

  &__btn {
    overflow: hidden;
    background-color: transparent;
    border: none;
    width: 5rem;

    &.active {
      .burger {
        &__svg {
          rotate: 0.125turn;
        }

        &__line {
          stroke-dasharray: 60 105 60 300;
          stroke-dashoffset: -90;
        }
      }
    }
  }

  &__svg {
    width: 100%;
    transition: rotate 1s;
  }

  &__line {
    transition: 1s;
    stroke-dasharray: 60 31 60 300;
  }
}
</style>
