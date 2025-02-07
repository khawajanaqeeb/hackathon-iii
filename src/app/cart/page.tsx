"use client";

import React from 'react';
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { CartItem } from "@/context/CartContext";
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateSubtotal = (item: CartItem) => item.price * item.quantity;

  const calculateGrandTotal = () => {
    return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  return (
    <div className="container bg-[#F9F1E7] mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div> {/* Added a wrapping div for better layout control */}
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left md:text-center">Image</th>
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Qty</th>
                <th className="p-2 text-right">Subtotal</th>
                <th className="p-2 text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item: CartItem) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 text-center">
                    <Image src={item.imageUrl} alt={item.title} width={80} height={80} className="rounded-lg object-contain" />
                  </td>
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">${item.price}</td>
                  <td className="p-2 flex items-center justify-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 rounded border disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="w-12 text-center border rounded"
                    />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 rounded border">
                      +
                    </button>
                  </td>
                  <td className="p-2 text-right">${calculateSubtotal(item)}</td>
                  <td className="p-2 text-center">
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5} className="text-right font-bold text-xl p-2">
                  Grand Total:
                </td>
                <td className="font-bold text-xl p-2 text-right">${calculateGrandTotal()}</td>
              </tr>
            </tfoot>
          </table>

          {/* Checkout Button */}
          <div className="mt-4 text-center">
            <Link href="/checkout">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Checkout
              </button>
            </Link>
          </div>
        </div> // Close the wrapping div
      )}
    </div>
  );
};

export default CartPage;