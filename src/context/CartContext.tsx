// src/app/context/CartContext.tsx

"use client"

import { createContext, useContext, useState, ReactNode } from "react";

// Define Product type
type Product = {
  title: string;
  slug: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

type CartContextType = {
  cart: Product[];
  favorites: Product[]; // Add favorites state
  addToCart: (product: Product) => void;
  addToFavorites: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  removeFromFavorites: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]); // State for the cart
  const [favorites, setFavorites] = useState<Product[]>([]); // State for the favorites
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.slug === product.slug);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.slug === product.slug
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const addToFavorites = (product: Product) => {
    setFavorites((prevFavorites) => {
      const existingProduct = prevFavorites.find((p) => p.slug === product.slug);
      if (existingProduct) return prevFavorites; // Avoid duplicates
      return [...prevFavorites, product];
    });
  };

  const removeFromCart = (slug: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.slug !== slug));
  };

  const removeFromFavorites = (slug: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((product) => product.slug !== slug));
  };

  const updateQuantity = (slug: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.slug === slug ? { ...product, quantity } : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, favorites, addToCart, addToFavorites, removeFromCart, removeFromFavorites, updateQuantity, showPopup, setShowPopup }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
