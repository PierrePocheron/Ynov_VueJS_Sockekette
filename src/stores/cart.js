import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", () => {
  const items = ref([]);

  const cartItemsCount = computed(() => {
    return items.value.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);
  });

  const totalAmount = computed(() => {
    return items.value.reduce((accumulator, item) => {
      return accumulator + item.amount;
    }, 0);
  });

  function loadProductsInStore(products) {
    items.value = [...products];
  }

  function addItem({ item, quantity }) {
    // vérifier si le produit est déjà dans le panier
    const productInCart = items.value.find((el) => el.id === item.id);

    if (productInCart) {
      productInCart.quantity = quantity;

      if (productInCart.quantity === 0) {
        const index = items.value.indexOf(productInCart);
        this.items.splice(index, 1);
      }

      productInCart.amount = productInCart.quantity * productInCart.price;
    } else {
      items.value = [
        ...items.value,
        { ...item, quantity: quantity, amount: item.price },
      ];
    }
  }

  function removeItem(item) {
    const index = items.value.findIndex((el) => el.id === item.id);
    items.value.splice(index, 1);
  }

  function resetCartStore() {
    items.value = [];
  }

  return {
    items,
    loadProductsInStore,
    cartItemsCount,
    addItem,
    totalAmount,
    removeItem,
    resetCartStore,
  };
});
