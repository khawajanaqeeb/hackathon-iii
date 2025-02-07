"use client"; // Important: Indicates this is a client component

import { useEffect, useState } from "react"; // Import hooks for state and effects
import { fetchProducts } from "@/sanity/lib/fetchProducts"; // Your function to fetch product data
import Image from "next/image"; // For optimized images
import Link from "next/link"; // For navigation
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Icons for favorites
import { useCart, CartItem } from "@/context/CartContext"; // Your cart context
import { toast } from 'react-toastify'; // For notifications
import 'react-toastify/dist/ReactToastify.css'; // Toast styles


// Define the Product interface (for type safety)
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: { current: string }; // The slug is crucial for dynamic routes
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
      if (allProducts) { // Check if products were fetched successfully
        setTotalPages(Math.ceil(allProducts.length / itemsPerPage)); // Calculate total pages
        setProducts(allProducts); // Update the products state
      } else {
        console.error("Failed to fetch products."); // Log an error if fetching fails
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array: runs only once when the component mounts

  // Calculate products to display on the current page (pagination logic)
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update the current page
  };

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = { // Create a cart item object
      id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    };
    addToCart(cartItem); // Add the item to the cart (using context)
    toast.success(`${product.title} added to cart!`); // Show a toast notification
  };

  const handleAddToFavorites = (product: Product) => {
    const favoriteItem: CartItem = { // Create a favorite item object (or just use the ID)
      id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    };
    addToFavorites(favoriteItem); // Add to favorites (using context)
    toast.success(`${product.title} added to favorites!`); // Toast notification
  };

  return (
    <div className="product-list mt-10 px-4"> {/* Main container */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Grid layout */}
        {paginatedProducts.map((product) => (
          <div
            key={product._id}
            className="product-card border p-4 rounded-lg hover:shadow-xl transition-all relative group"
          > {/* Individual product card */}
            {product.isNew && ( // "New Arrival" tag
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs py-1 px-2 rounded-full shadow-md z-10">
                New Arrival
              </span>
            )}

<Link href={product.slug && product.slug.current ? `/product/${product.slug.current}` : "/"} className="block"> {/* Link to product page */}
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={500} // Adjust as needed
                height={300} // Adjust as needed
                className="rounded-t-lg object-cover w-full h-64 cursor-pointer" // Image styles
              />
            </Link>

            <div className="p-4"> {/* Card content */}
            <Link href={product.slug && product.slug.current ? `/product/${product.slug.current}` : "/"} className="block"> {/* Link for title/description */}
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

              <button
                onClick={() => handleAddToCart(product)}
                className="add-to-cart-btn mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>

              <div
                className="absolute top-2 right-2 transition-all bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer"
                onClick={() => handleAddToFavorites(product)}
              > {/* Favorites button */}
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

      <div className="pagination mt-6 flex justify-center items-center gap-4"> {/* Pagination */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => handlePageChange(idx + 1)}
            className={`px-4 py-2 rounded-lg ${
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
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;