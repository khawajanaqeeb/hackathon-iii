// src/app/components/OurProducts.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { ProductList } from "./ProductList";

export default function OurProducts() {
  const { addToCart } = useCart();

  return (
    <div className="container px-10 py-10">
      <h2 className="text-3xl font-bold text-center py-10 leading-10">Our Products</h2>
      {/* Server Component Rendering */}
      <ProductList />
    </div>
  );
}
