<template>
  <div>
    <h1>Products</h1>
    <div v-if="isLoading">Loading ...</div>
    <div v-else class="productList">
      <fieldset>
        <legend>Trier la liste des produits :</legend>

        <div v-for="(sort, i) in sortingAvailable" :key="i">
          <input
            type="radio"
            :id="sort.label"
            name="sortBy"
            :value="sort"
            v-model="sortingSelected"
            :checked="sort.checked"
            @change="sortProductsList"
          />
          <label :for="sort.label">{{ sort.label }}</label>
        </div>
      </fieldset>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import ProductItem from "@/components/03 - Organismes/ProductItem.vue";

const products = ref([]);
const isLoading = ref(false);
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
const sortingSelected = ref(null);

const searchProducts = async () => {
  isLoading.value = true;
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=10");
    const json = await res.json();
    // tri des produits par note la plus haute par défaut
    products.value = sortProductsBy(json, "rate");
  } catch {
    alert("An error occured!");
  }
  isLoading.value = false;
};

function sortProductsList() {
  const productsToSort = [...products.value];
  products.value = sortProductsBy(
    productsToSort,
    sortingSelected.value.filterBy,
    sortingSelected.value.sort
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

searchProducts();
</script>
