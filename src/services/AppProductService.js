import { slugify } from "@/utils/slugify";
const SIZE = 9;

export const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categoriesName = await res.json();
  const categories = [];
  categoriesName.forEach((label) => {
    categories.push({
      label,
      id: crypto.randomUUID(),
      slug: slugify(label),
      image:
        "https://www.lahalle.com/on/demandware.static/-/Sites-lahalle_master/default/dw49f86cb0/sweat-a-capuche-hoodie-vert-olive-homme-b-36165600613111097.jpg",
    });
  });
  return await categories;
};

export const getProducts = async (page = 1) => {
  const limit = SIZE * page;

  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  const products = await res.json();
  return products;
};

export const getProductsByCategory = async (page = 1, category) => {
  const limit = SIZE * page;
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
  );
  const products = await res.json();
  return products;
};

export const getProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return product;
};
