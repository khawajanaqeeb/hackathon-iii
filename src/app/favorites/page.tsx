"use client";

import { useCart, CartItem } from "@/context/CartContext";
import Image from "next/image";

export default function Favorites() {
  const { favorites, removeFromFavorites } = useCart();

  return (
    <div>
      <div className="relative w-full h-[316px]">
        <Image src="/shop1.png" alt="background-shop" fill className="object-cover" />
        <Image
          src="/mh.png"
          className="absolute w-[50px] h-[41px] top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt="Logo"
          width={50}
          height={41}
        />
        <h1 className="text-3xl font-black relative top-20 text-center text-[#B88E2F] mb-6">
          Your Favorites
        </h1>
      </div>
      <div className="min-h-screen bg-[#FFF3E3] p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((item: CartItem) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={item.imageUrl || "/default-image.png"}
                alt={item.title}
                width={300}
                height={200}
                className="object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold text-[#333333] mt-4">{item.title}</h2>
              <p className="text-[#B88E2F] mt-2">Price: ${item.price}</p>
              <button
                className="w-full py-2 bg-[#B88E2F] text-white mt-4 rounded-md"
                onClick={() => removeFromFavorites(item.id)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}