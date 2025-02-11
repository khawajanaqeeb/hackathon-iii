'use client'


import { useEffect, useState } from "react";
import { fetchProducts } from "@/sanity/lib/fetchProducts";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Icons for favorites
import { useCart, CartItem } from "@/context/CartContext"; // Your cart context
import { toast } from "react-toastify"; // For notifications
import "react-toastify/dist/ReactToastify.css"; // Toast styles

//  Product interface
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: { current: string };
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
}

const ProductList = () => {
  const { addToCart, addToFavorites, favorites } = useCart(); // Access cart functions
  const [products, setProducts] = useState<Product[]>([]); // State for fetched products
  const [currentPage, setCurrentPage] = useState(1); // State for current page (pagination)
  const [totalPages, setTotalPages] = useState(1); // State for total pages (pagination)

  const itemsPerPage = 6; // Number of products per page
  const exchangeRate = 280; // Your exchange rate

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await fetchProducts(); // Fetch products from Sanity
      if (allProducts) {
        setTotalPages(Math.ceil(allProducts.length / itemsPerPage));
        setProducts(allProducts);
      } else {
        console.error("Failed to fetch products.");
      }
    };

    fetchData();
  }, []);

  // Calculate products to display on the current page
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    };
    addToCart(cartItem);
    toast.success(`${product.title} added to cart!`, {
      position: "bottom-right", // Positioning it in the top-right
      className: "toast-container", // Custom class for styling
      autoClose: 2000, // Auto close after 2 seconds
    });
  };

  const handleAddToFavorites = (product: Product) => {
    const favoriteItem: CartItem = {
      id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    };
    addToFavorites(favoriteItem);
    toast.success(`${product.title} added to favorites!`, {
      position: "bottom-right", // Positioning it in the top-right
      className: "toast-container", // Custom class for styling
      autoClose: 2000, // Auto close after 2 seconds
    });
  };

  return (
    <div className="product-list mt-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProducts.map((product) => (
          <div
            key={product._id}
            className="product-card border p-4 rounded-lg hover:shadow-lg transition-all relative group bg-white"
          >
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs py-1 px-2 rounded-full shadow-md">
                New Arrival
              </span>
            )}

            {/* Product Image */}
            <Link
              href={
                product.slug && product.slug.current
                  ? `/product/${product.slug.current}`
                  : "/"
              }
              className="block"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={300}
                className="rounded-t-lg object-cover w-full h-auto cursor-pointer"
              />
            </Link>

            {/* Product Details */}
            <div className="p-4">
              <Link
                href={
                  product.slug && product.slug.current
                    ? `/product/${product.slug.current}`
                    : "/"
                }
                className="block"
              >
                <h3 className="mt-3 text-lg font-medium text-gray-800 hover:underline">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 truncate hover:underline">
                  {product.description}
                </p>
              </Link>

              <p className="font-semibold text-gray-900 mt-2">
                <span className="text-gray-600">Price: </span>
                {product.price} USD
              </p>
              <p className="font-semibold text-gray-900 mt-2">
                <span className="text-gray-600">Price in PKR: </span>
                {(product.price * exchangeRate).toLocaleString()} PKR
              </p>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>

              {/* Favorites Button */}
              <div
                className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer"
                onClick={() => handleAddToFavorites(product)}
              >
                {favorites.find((fav) => fav.id === product._id) ? (
                  <AiFillHeart className="text-red-500 text-2xl" />
                ) : (
                  <AiOutlineHeart className="text-red-500 text-2xl" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination mt-6 flex justify-center items-center gap-2 md:gap-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 md:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => handlePageChange(idx + 1)}
            className={`px-3 md:px-4 py-2 rounded-lg ${
              currentPage === idx + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-300`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 md:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
