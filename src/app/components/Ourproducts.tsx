"use client";

import { useCart } from "@/context/CartContext";
import ProductList from "@/app/components/ProductList"; // Correct import path

export default function OurProducts() {
  const { addToCart, showPopup } = useCart();

  return (
    <div className="container px-10 py-10">
      <h2 className="text-3xl font-bold text-center py-10 leading-10">Our Products</h2>
      {/* Server Component Rendering */}
      <ProductList addToCart={addToCart} />
      
      {/* Popup Message */}
      {showPopup && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg">
          <p>Added to cart! Go to the cart to see the details.</p>
        </div>
      )}
    </div>
  );
}