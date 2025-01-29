"use client";

// /src/components/ProductList.tsx
import { useEffect, useState } from "react";
import { fetchProducts } from "@/sanity/lib/fetchProducts";
import Image from "next/image";
import { AiOutlineHeart } from 'react-icons/ai'; // For the favorite icon

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 9;
  const exchangeRate = 280; // 1 USD = 280 PKR, adjust the rate if necessary

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await fetchProducts();
      const totalItems = allProducts.length;
      setTotalPages(Math.ceil(totalItems / itemsPerPage));
      setProducts(allProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-list mt-10 px-4">
      {/* Centered heading with beautiful style */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="product-card border p-4 rounded-lg hover:shadow-xl transition-all relative group">
            {/* "New Arrival" tag */}
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs py-1 px-2 rounded-full shadow-md z-10">
                New Arrival
              </span>
            )}

            {/* Larger, responsive image */}
            <div className="w-full h-64 relative">
              <Image
                src={product.imageUrl}
                alt={product.title}
                layout="fill" // Fills the container, keeping the aspect ratio
                objectFit="cover" // Ensures the image covers the space without stretching
                className="rounded-t-lg"
              />
            </div>

            <h3 className="mt-3 text-lg font-medium text-gray-800">{product.title}</h3>
            <p className="text-sm text-gray-600 truncate">{product.description}</p>

            {/* Prices in USD and PKR */}
            <p className="font-semibold text-gray-900 mt-2">
              <span className="text-gray-600">Price: </span>{product.price} USD
            </p>
            <p className="font-semibold text-gray-900 mt-2">
              <span className="text-gray-600">Price in PKR: </span>{(product.price * exchangeRate).toLocaleString()} PKR
            </p>

            {/* Add to Cart button */}
            <button className="add-to-cart-btn mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>

            {/* Hover effect: Add to Favorites icon */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <AiOutlineHeart className="text-red-500 text-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="pagination mt-6 flex flex-col sm:flex-row justify-between items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="prev-next-btn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500 mb-4 sm:mb-0"
        >
          Prev
        </button>

        <div className="page-numbers flex gap-2 mb-4 sm:mb-0">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`page-btn px-4 py-2 rounded-lg ${currentPage === idx + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-300`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="prev-next-btn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
