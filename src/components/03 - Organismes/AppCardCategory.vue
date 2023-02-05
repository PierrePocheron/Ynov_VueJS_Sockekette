<template>
  <div class="categories container">
    <div class="categories__heading">
      <AppHeading tag="h2" level="secondary">Our categories</AppHeading>
      <AppParagraph level="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        obcaecati perspiciatis cumque dolorum incidunt beatae ipsa
        necessitatibus repellendus corrupti quaerat. Asperiores repudiandae
        sequi ipsam fugit iusto quos vitae accusantium itaque.
      </AppParagraph>
    </div>

    <div class="categories__grid">
      <div
        class="categories__item"
        v-for="category in categories"
        :key="category.id"
      >
        <AppButton
          :to="{ name: 'home' }"
          tag="router-link"
          theme="link"
          class="categories__link"
        >
          <div class="categories__info">
            <AppHeading tag="h4" level="secondary" class="clr--white">
              {{ category.label }}
            </AppHeading>
          </div>
          <div class="categories__img">
            <img :src="category.image" :alt="category.label" />
          </div>
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { getCategories } from "../../services/AppProductService";
import AppHeading from "@/components/01 - Atoms/AppHeading.vue";
import AppParagraph from "@/components/01 - Atoms/AppParagraph.vue";
import AppButton from "../01 - Atoms/AppButton.vue";

const categories = ref([]);

onBeforeMount(async () => {
  categories.value = await getCategories();
});
</script>

<style lang="scss" scoped>
.categories {
  margin-top: 6rem;

  &__heading {
    max-width: 70rem;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    width: 70%;
    margin: 6rem auto 0 auto;

    @media (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__item {
    position: relative;
    height: 50rem;
    padding: 5rem;
    &:hover {
      background-color: var(--clr-secondary-50);
    }
  }

  &__link {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__info {
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 1.5rem;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.5);
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      display: block;
    }
  }
}
</style>
