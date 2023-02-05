<template>
  <AppLoading v-if="isLoading" />
  <div v-else class="products container">
    <AppProductFilter
      :filters="sortingAvailable"
      @handleFilters="sortProductsList"
    />
    <AppProductsGridVue :products="products" />
  </div>
</template>
<script setup>
import { onBeforeMount, ref, watch, reactive } from "vue";
import { useRoute } from "vue-router";
import { getProductsByCategory } from "../services/AppProductService";
import AppLoading from "../components/01 - Atoms/AppLoading.vue";
import AppProductFilter from "../components/02 - Molecules/AppProductFilter.vue";
import AppProductsGridVue from "../components/03 - Organismes/AppProductsGrid.vue";

const route = useRoute();
const isLoading = ref(false);
const products = ref([]);
const sortingAvailable = reactive([
  {
    label: "Ordre alphabétique",
    filterBy: "name",
    sort: "asc",
    checked: false,
  },
  {
    label: "Ordre alphabétique inversé",
    filterBy: "name",
    sort: "desc",
    checked: false,
  },
  {
    label: "Note décroissante",
    filterBy: "rate",
    sort: "desc",
    checked: true,
  },
  {
    label: "Note croissante",
    filterBy: "rate",
    sort: "asc",
    checked: false,
  },
]);

onBeforeMount(loadProductsByCategory);

async function loadProductsByCategory() {
  isLoading.value = true;
  const categoryParams = route.params.category;
  products.value = await getProductsByCategory(null, categoryParams);
  isLoading.value = false;
}

watch(route, () => loadProductsByCategory());

function sortProductsList(filter) {
  const productsToSort = [...products.value];
  products.value = sortProductsBy(productsToSort, filter.filterBy, filter.sort);
}

function sortProductsBy(products, filterBy = "name", sort = "desc") {
  const productsToSort = [...products];
  productsToSort.sort(function (a, b) {
    let rateA = a.title;
    let rateB = b.title;

    if (filterBy === "rate") {
      rateA = a.rating.rate;
      rateB = b.rating.rate;
    }

    if (sort === "asc") {
      return rateA < rateB ? -1 : rateA > rateB ? 1 : 0;
    }
    return rateA < rateB ? 1 : rateA > rateB ? -1 : 0;
  });

  return productsToSort;
}
</script>
<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
