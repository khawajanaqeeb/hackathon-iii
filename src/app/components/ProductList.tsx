//ProductList


"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShareAlt, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export const ProductList = async () => {
  const ourProducts = await client.fetch(`*[_type=="product"]{
    title,
    "slug": slug.current,
    "imageUrl": productImage.asset->url, 
    price,
    description
  }`);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center">
      {ourProducts.map((product: any, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md border w-[280px] h-[400px] relative group">
      <div className="relative w-full h-[270px]">
        <Image
          src={urlFor(product.imageUrl).url()}
          alt={product.title}
          fill
          className="object-cover rounded-t-lg"
          quality={100}
        />
        {/* Hover Icons */}
        <div className="absolute inset-0 flex items-center justify-center space-x-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
          <button className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
            <FaHeart className="text-red-500" />
          </button>
          <button className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
            <FaShareAlt className="text-blue-500" />
          </button>
          <button
            className="bg-white p-2 rounded-full hover:bg-gray-200 transition"
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart className="text-green-500" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold">${product.price}</span>
          <Link href={`/product/${product.slug}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              View Details
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};
