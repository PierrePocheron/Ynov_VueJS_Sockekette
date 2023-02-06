<template>
  <AppLoading v-if="isLoading" />
  <div v-else class="products container">
    <AppProductFilter
      :filters="sortingAvailable"
      @handleFilters="sortProductsList"
      @handle-search="searchProduct"
    />
    <AppProductsGrid :products="productsToDisplay" />
  </div>
</template>

<script setup>
import { reactive, ref, onBeforeMount, computed } from "vue";
import AppLoading from "@/components/01 - Atoms/AppLoading.vue";
import AppProductFilter from "@/components/02 - Molecules/AppProductFilter.vue";
import { getProducts } from "@/services/AppProductService";
import AppProductsGrid from "../components/03 - Organismes/AppProductsGrid.vue";

const products = ref([]);
const productsFiltered = ref([]);
const isModeSearch = ref(false);
const isLoading = ref(true);
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

onBeforeMount(() => {
  loadProducts();
});

const productsToDisplay = computed(() => {
  if (isModeSearch.value) {
    return productsFiltered.value;
  } else {
    return products.value;
  }
});

const loadProducts = async () => {
  isLoading.value = true;
  const res = await getProducts();
  products.value = sortProductsBy(res, "rate");
  isLoading.value = false;
};

function sortProductsList(filter) {
  const productsToSort = [...productsToDisplay.value];
  isModeSearch.value
    ? (productsFiltered.value = sortProductsBy(
        productsToSort,
        filter.filterBy,
        filter.sort
      ))
    : (products.value = sortProductsBy(
        productsToSort,
        filter.filterBy,
        filter.sort
      ));
}

function searchProduct(search) {
  search.trim().length === 0
    ? (isModeSearch.value = false)
    : (isModeSearch.value = true);
  productsFiltered.value = products.value.filter((product) =>
    product.title.toLowerCase().startsWith(search.toLowerCase())
  );
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
