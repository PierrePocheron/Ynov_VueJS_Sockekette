<template>
  <nav class="nav container" :class="{ opened: isOpen }">
    <div class="nav__brand">
      <AppButton :to="{ name: 'home' }" tag="router-link" theme="link">
        <template #default>
          <AppLogo>
            <AppHeading tag="h1" level="tertiary" class="clr--primary">
              Sokekette
            </AppHeading>
          </AppLogo>
        </template>
      </AppButton>
    </div>
    <ul class="nav__list">
      <li class="nav__item">
        <AppButton tag="router-link" :to="{ name: 'products' }" theme="link">
          <template #default>Tous les produits</template>
        </AppButton>
      </li>
      <li class="nav__item" v-if="categories.length > 0">
        <span class="nav__title">Categories</span>
        <ul class="nav__list nav__list--submenu">
          <li
            class="nav__item nav__item--subitem"
            v-for="category in categories"
            :key="category.slug"
          >
            <AppButton
              tag="router-link"
              theme="link"
              :to="{
                name: 'products-category',
                params: { category: category.slug },
              }"
            >
              <template #default>
                {{ category.label }}
              </template>
            </AppButton>
          </li>
        </ul>
      </li>
      <li class="nav__item">
        <AppButton tag="router-link" :to="{ name: 'cart' }" theme="link">
          <template #default>Mon panier</template>
        </AppButton>
      </li>
    </ul>
    <AppBurger @handleMenu="toggleMenu" />
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCategories } from "@/services/AppProductService.js";
import AppLogo from "@/components/01 - Atoms/AppLogo.vue";
import AppBurger from "@/components/01 - Atoms/AppBurger.vue";
import AppHeading from "../01 - Atoms/AppHeading.vue";
import AppButton from "../01 - Atoms/AppButton.vue";

const categories = ref([]);
const isOpen = ref(false);

onMounted(async () => {
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
  position: sticky;
  z-index: 99999;
  top: 0;

  &.opened {
    .nav__list {
      opacity: 1;
      visibility: visible;
      transform: scaleY(1);
      transition: all 0.25s ease-in;

      &--submenu {
        @media (min-width: 768px) {
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  }

  &__title {
    color: var(--clr-dark);
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: var(--font-size-s);
    font-family: var(--font-family-primary);
  }

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
    opacity: 0;
    visibility: hidden;
    transform: scaleY(0);
    transform-origin: top;
    transition: all 0.25s ease-in;
    z-index: 9999;

    @media (min-width: 768px) {
      position: unset;
      flex-direction: row;
      width: auto;
      background-color: transparent;
      opacity: 1;
      visibility: visible;
      transform: scaleY(1);
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
        box-shadow: 5px 5px 1rem 5px rgba(0, 0, 0, 0.2);
        width: 150%;
        background-color: white;
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
}
</style>
