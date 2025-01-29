// /sanity/lib/fetchProducts.ts
import { client } from "@/sanity/lib/client";

export async function fetchProducts() {
  const query = `*[_type == "product"]{
    _id,
    title,
    description,
    price,
    "imageUrl": productImage.asset->url,
    tags,
    discountPercentage,
    isNew
  }`;

  const products = await client.fetch(query);
  return products;
}
