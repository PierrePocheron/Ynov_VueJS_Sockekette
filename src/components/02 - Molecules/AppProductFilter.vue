<template>
  <div class="filters">
    <div class="filters__container">
      <div class="filters__item" v-for="(filter, i) in props.filters" :key="i">
        <input
          type="radio"
          :id="filter.label"
          name="sortBy"
          :value="filter"
          :checked="filter.checked"
          class="filters__radio"
          @change="emit('handleFilters', filter)"
        />
        <label :for="filter.label" class="filters__label">{{
          filter.label
        }}</label>
      </div>
      <div>
        <label for="search">Rechercher un produit</label>
        <input
          class="filters__item"
          type="text"
          name="search"
          id="search"
          placeholder="nom du produit"
          v-model="inputSearch"
          @keyup="emit('handleSearch', inputSearch)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["handleFilters", "handleSearch"]);

const props = defineProps({
  filters: {
    type: Array,
    required: true,
  },
});

const inputSearch = ref(null);
</script>

<style lang="scss" scoped>
.filters {
  width: 100%;
  background-color: var(--clr-white);
  padding: 2rem;
  position: sticky;
  z-index: 9999;
  top: 15rem;

  @media (min-width: 768px) {
    max-width: 25rem;
    background-color: transparent;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    position: sticky;
    top: 15rem;

    @media (min-width: 768px) {
      flex-direction: column;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__radio {
    height: 2rem;
    width: 2rem;
    accent-color: var(--clr-primary);
  }
}
</style>
