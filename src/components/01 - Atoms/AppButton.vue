<template>
  <button
    :disabled="props.disabled"
    class="btn"
    :class="[`btn--${props.theme}`]"
  >
    <slot name="content" />
    <slot name="icon" />
  </button>
</template>

<script setup>
const props = defineProps({
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
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 1rem 2rem;
  display: block;
  border-radius: 1rem;
  font-size: var(--font-size-md);
  font-weight: medium;
  border: 1px solid transparent;

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
