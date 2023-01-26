<template>
  <component
    :is="props.tag"
    class="heading"
    :class="[`heading--${props.level}`]"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  tag: {
    type: String,
    required: true,
    validator: (val) => {
      return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(val);
    },
  },
  level: {
    type: String,
    default: "primary",
    validator: (val) => {
      return ["primary", "secondary", "tertiary", "quaternary"].includes(val);
    },
  },
});
</script>

<style lang="scss" scoped>
.heading {
  &--primary {
    font-size: var(--font-size-xxl);
  }
  &--secondary {
    font-size: var(--font-size-xl);
  }
  &--tertiary {
    font-size: var(--font-size-l);
  }
  &--quaternary {
    font-size: var(--font-size-md);
  }
}
</style>
