<template>
  <div class="rating">
    <IconStar v-for="index in props.value" :key="index" />
  </div>
</template>

<script setup>
import IconStar from "../icons/IconStar.vue";

const props = defineProps({
  value: {
    type: Number,
    validator: (val) => {
      return [1, 2, 3, 4, 5].includes(val);
    },
  },
});
</script>

<style lang="scss" scoped>
.rating {
  display: flex;
  font-size: var(--font-size-md);
  color: var(--clr-primary);
}
</style>
