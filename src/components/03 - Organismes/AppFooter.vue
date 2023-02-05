<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__logo">
        <AppLogo>
          <AppHeading tag="h1" level="tertiary" class="clr--primary">
            Sokekette
          </AppHeading>
        </AppLogo>
        <AppParagraph level="tertiary" class="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima
          earum expedita quis in voluptatibus similique dignissimos soluta
          eveniet provident. Dolorem architecto pariatur assumenda ex
          consequatur inventore nobis vel est!
        </AppParagraph>
      </div>
      <div class="footer__menu">
        <div class="footer__categories">
          <ul class="footer__list">
            <li
              class="footer__item"
              v-for="category in categories"
              :key="category.id"
            >
              <AppButton :to="{ name: 'home' }" tag="router-link" theme="link">
                {{ category.label }}
              </AppButton>
            </li>
          </ul>
        </div>
        <div class="footer__categories">
          <ul class="footer__list">
            <li
              class="footer__item"
              v-for="category in categories"
              :key="category.id"
            >
              <AppButton :to="{ name: 'home' }" tag="router-link" theme="link">
                {{ category.label }}
              </AppButton>
            </li>
          </ul>
        </div>
        <div class="footer__categories">
          <ul class="footer__list">
            <li
              class="footer__item"
              v-for="category in categories"
              :key="category.id"
            >
              <AppButton :to="{ name: 'home' }" tag="router-link" theme="link">
                {{ category.label }}
              </AppButton>
            </li>
          </ul>
        </div>
        <div class="footer__categories">
          <ul class="footer__list">
            <li
              class="footer__item"
              v-for="category in categories"
              :key="category.id"
            >
              <AppButton :to="{ name: 'home' }" tag="router-link" theme="link">
                {{ category.label }}
              </AppButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import AppLogo from "@/components/01 - Atoms/AppLogo.vue";
import AppParagraph from "@/components/01 - Atoms/AppParagraph.vue";
import { onBeforeMount, ref } from "vue";
import { getCategories } from "../../services/AppProductService";
import AppHeading from "../01 - Atoms/AppHeading.vue";
import AppButton from "../01 - Atoms/AppButton.vue";

const categories = ref([]);

onBeforeMount(async () => {
  categories.value = await getCategories();
});
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--clr-secondary);
  padding: 5rem 0;
  margin-top: 10rem;
  .container {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }

  &__logo {
    max-width: 35rem;
  }

  &__list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: end;
    row-gap: 1rem;
  }

  &__menu {
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__item {
    font-size: var(--font-size-s);
  }
}
</style>
