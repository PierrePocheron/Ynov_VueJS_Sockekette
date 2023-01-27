<template>
  <component
    :is="props.tag"
    :disabled="props.disabled"
    class="btn"
    :to="props.to"
    :class="[`btn--${props.theme}`]"
  >
    <slot />
    <slot name="icon" />
  </component>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "button",
    validator: (val) => {
      return ["button", "router-link"].includes(val);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    default: "primary",
    validator: (val) => {
      return ["primary", "secondary"].includes(val);
    },
  },
  type: {
    type: String,
    default: "button",
  },
  to: {
    type: String,
    default: "/",
  },
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 1rem 2rem;
  display: block;
  border-radius: 1rem;
  font-size: var(--font-size-s);
  font-weight: medium;
  border: 1px solid transparent;
  text-decoration: none;

  &--primary {
    background-color: var(--clr-primary);
    color: var(--clr-white);

    &:hover {
      color: var(--clr-primary);
      background-color: transparent;
      border-color: var(--clr-primary);
    }
  }

  &--secondary {
    background-color: transparent;
    border-color: var(--clr-primary);
    color: var(--clr-primary);

    &:hover {
      color: var(--clr-white);
      background-color: var(--clr-primary);
    }
  }
}
</style>
