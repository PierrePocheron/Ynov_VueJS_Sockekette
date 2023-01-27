import { slugify } from "@/utils/slugify";

export const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categoriesName = await res.json();

  let categories = [];
  Object.keys(categoriesName).forEach(function (name, index) {
    categories = [
      ...categories,
      {
        label: categoriesName[index],
        slug: slugify(categoriesName[index]),
      },
    ];
  });

  return categories;
};
