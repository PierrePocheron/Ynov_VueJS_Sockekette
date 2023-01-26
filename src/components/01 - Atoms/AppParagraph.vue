<template>
  <p class="paragraph" :class="[`paragraph--${props.level}`]">
    <slot></slot>
  </p>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  level: {
    type: String,
    default: "primary",
    validator: (val) => {
      return ["primary", "secondary", "tertiary"].includes(val);
    },
  },
});
</script>

<style lang="scss" scoped>
.paragraph {
  &--primary {
    font-size: var(--font-size-md);
  }
  &--secondary {
    font-size: var(--font-size-s);
  }
  &--tertiary {
    font-size: var(--font-size-xs);
  }
}
</style>
