// src/app/context/CartContext.tsx

'use client'

// src/app/context/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  title: string;
  slug: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

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
  };

  const removeFromCart = (slug: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.slug !== slug));
  };

  const updateQuantity = (slug: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.slug === slug ? { ...product, quantity } : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
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
