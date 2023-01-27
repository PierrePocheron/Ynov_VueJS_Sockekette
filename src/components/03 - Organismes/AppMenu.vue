<template>
  <nav class="nav container" :class="{ opened: isOpen }">
    <div class="nav__brand">
      <AppRouterLink to="/">
        <template #default>
          <AppLogo />
        </template>
      </AppRouterLink>
    </div>
    <ul class="nav__list">
      <li class="nav__item">
        <AppRouterLink to="/">
          <template #default>Tous les produits</template>
        </AppRouterLink>
      </li>
      <li class="nav__item" v-if="categories.length > 0">
        <AppRouterLink to="/">
          <template #default>
            <span>Categories</span>
            <ul class="nav__list nav__list--submenu">
              <li
                class="nav__item nav__item--subitem"
                v-for="categorie in categories"
                :key="categorie"
              >
                {{ categorie }}
              </li>
            </ul>
          </template>
        </AppRouterLink>
      </li>
      <li class="nav__item">
        <AppRouterLink to="/">
          <template #default>Mon panier</template>
        </AppRouterLink>
      </li>
    </ul>
    <AppBurger @handleMenu="toggleMenu" />
  </nav>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { getCategories } from "@/services/AppProductService.js";
import AppRouterLink from "@/components/01 - Atoms/AppRouterLink.vue";
import AppLogo from "@/components/01 - Atoms/AppLogo.vue";
import AppBurger from "@/components/01 - Atoms/AppBurger.vue";

const categories = ref([]);
const isOpen = ref(false);

onBeforeMount(async () => {
  categories.value = await getCategories();
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  position: relative;

  &__list {
    position: absolute;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    column-gap: 1.5rem;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--clr-white);
    padding: 2rem;
    max-height: 0;
    transition: max-height 0.25s ease-in, opacity 0.25s;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;

    @media (min-width: 768px) {
      position: unset;
      flex-direction: row;
      width: auto;
      background-color: transparent;
      opacity: 1;
      visibility: visible;
      max-height: fit-content;
    }

    &--submenu {
      position: unset;
      @media (min-width: 768px) {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        position: absolute;
        top: 100%;
        padding: 2rem 0;
        left: 0;
        flex-direction: column;
        row-gap: 1.5rem;
        box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.22);
      }
    }
  }

  &__item {
    position: relative;
    padding: 1rem 2rem;

    @media (min-width: 768px) {
      &:hover {
        background-color: var(--clr-light-grey);
        .nav__list--submenu {
          opacity: 1;
          visibility: visible;
          pointer-events: all;
        }
      }
    }
  }

  &__brand {
    margin-right: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &.opened {
    .nav__list {
      opacity: 1;
      visibility: visible;
      max-height: fit-content;
      transition: max-height 0.25s ease-in, opacity 0.25s;
    }
  }
}
</style>