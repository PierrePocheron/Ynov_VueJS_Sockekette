<template>
  <router-link
    :to="props.to"
    class="link"
    :class="[`link--${theme}`]"
    activeClass="active"
  >
    <slot />
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: "primary",
    validator: (val) => {
      return ["primary", "secondary"].includes(val);
    },
  },
});
</script>

<style lang="scss" scoped>
.link {
  color: var(--clr-dark-grey);
  text-decoration: none;
  font-size: var(--font-size-s);
  font-family: var(--font-family-primary);

  &.active {
    color: var(--clr-primary);
  }
}
</style>
