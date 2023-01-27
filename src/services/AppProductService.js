export const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categoriesName = await res.json();
  const categories = [];
  categoriesName.forEach((name) => {
    categories.push({
      name,
      id: crypto.randomUUID(),
      image:
        "https://www.lahalle.com/on/demandware.static/-/Sites-lahalle_master/default/dw49f86cb0/sweat-a-capuche-hoodie-vert-olive-homme-b-36165600613111097.jpg",
    });
  });
  return await categories;
};

export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const products = [...(await res.json())];
  products.forEach((p) => {
    p.quantity = 1;
    p.amount = p.price;
  });
  return await res.json();
};
