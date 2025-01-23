// src/app/context/CartContext.tsx

'use client'

import { createContext, useContext, useState, ReactNode } from "react";

// Define Product type
type Product = {
  title: string;
  slug: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

// Define CartContext type
type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  showPopup: boolean;
  setShowPopup: (show: boolean) => void; // For controlling the popup
};

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]); // State for the cart
  const [showPopup, setShowPopup] = useState<boolean>(false); // State for controlling the popup

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.slug === product.slug);
      if (existingProduct) {
        // If product already exists in cart, update its quantity
        return prevCart.map((p) =>
          p.slug === product.slug
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      // If product does not exist, add it to the cart
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setShowPopup(true); // Show the popup when an item is added
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  // Function to remove a product from the cart
  const removeFromCart = (slug: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.slug !== slug));
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (slug: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.slug === slug ? { ...product, quantity } : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, showPopup, setShowPopup }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to access the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
