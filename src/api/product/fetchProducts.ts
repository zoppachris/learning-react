import { createResource } from "../../lib/createResource";

async function fetchInitialProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=10&skip=0");
  const json = await res.json();
  return json.products;
}

export const productResource = createResource(fetchInitialProducts());

export async function fetchMoreProducts(skip: number, limit: number = 10) {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  const json = await res.json();
  return json.products;
}
