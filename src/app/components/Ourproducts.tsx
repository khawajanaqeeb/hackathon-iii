import { client } from '@/sanity/lib/client';
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import React from 'react';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

const OurProducts = async () => {
  const ourProducts = await client.fetch(`*[_type=="product"]{
    title,
    "slug": slug.current,
    "imageUrl" : productImage.asset->url, 
    price,
    tags,
    discountPercentage,
    description
  }[0...8]`); // Fetch first 8 products

  return (
    <div className="container px-10 py-10">
      <h2 className="text-3xl font-bold text-center py-10 leading-10">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center">
        {ourProducts.map((product: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-300 w-[280px] h-[400px]"
          >
            <div className="relative w-full h-[270px]">
              <Image
                src={urlFor(product.imageUrl).url()}
                alt={product.slug}
                fill
                className="object-cover rounded-t-lg"
                quality={100}
              />
              {product.discountPercentage && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  -{product.discountPercentage}%
                </div>
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Link href={`/shop/${product.slug}`}>
                  <button className="bg-white text-black px-4 py-2 mb-4 rounded">
                    Add to Cart
                  </button>
                </Link>
                <div className="flex space-x-4 text-white">
                  <button className="hover:text-gray-300 flex items-center">
                    <IoMdShare />
                    Share
                  </button>
                  <Link href="/comparison">
                    <button className="hover:text-gray-300 flex items-center">
                      <FaArrowRightArrowLeft />
                      Compare
                    </button>
                  </Link>
                  <button className="hover:text-gray-300 flex items-center">
                    <FaRegHeart />
                    Like
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">{product.title}</h3>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold">${product.price}</span>
                {product.fakePrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.fakePrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
