export const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return await res.json();
};
