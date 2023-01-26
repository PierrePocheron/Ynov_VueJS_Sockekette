export const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = [...(await res.json())];
  categories.forEach((c) => {
    c.id = crypto.randomUUID;
    c.image = "/hoodie.jpeg";
  });
  return await res.json();
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
