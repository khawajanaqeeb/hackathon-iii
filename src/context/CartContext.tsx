"use client";

import { Product } from '@/types/Product';
import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  cart: Product[];
  favorites: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (slug: string) => void;
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
  popupMessage: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>(''); 

  const showPopupMessage = (message: string) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); 
  };

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((p) => p.slug.current === product.slug.current); 
    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((p) =>
          p.slug.current === product.slug.current
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
    showPopupMessage("Added to cart!");
  };

  const removeFromCart = (slug: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.slug.current !== slug));
  };

  const updateQuantity = (slug: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.slug.current === slug 
          ? { ...product, quantity } 
          : product
      )
    );
  };

  const addToFavorites = (product: Product) => {
    const existingProduct = favorites.find((p) => p.slug.current === product.slug.current);
    if (!existingProduct) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
      showPopupMessage("Added to favorites!");
    }
  };

  const removeFromFavorites = (slug: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((product) => product.slug.current !== slug));
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        favorites, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        addToFavorites, 
        removeFromFavorites, 
        showPopup, 
        setShowPopup, 
        popupMessage 
      }}
    >
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
