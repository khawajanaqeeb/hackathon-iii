"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function Checkout() {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);  // Reset previous errors
    const stripe = await stripePromise;

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();
      if (data.sessionId) {
        await stripe?.redirectToCheckout({ sessionId: data.sessionId });
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("An error occurred while processing your payment.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full h-[316px]">
        <Image src="/shop1.png" alt="background-shop" layout="fill" objectFit="cover" />
        <h2 className="absolute text-5xl font-medium text-black top-[40%] left-[50%] transform -translate-x-1/2">Checkout</h2>
        <div className="absolute top-[58%] left-[50%] transform -translate-x-1/2">
          <Link href="/">Home</Link> / <Link href="/checkout">Checkout</Link>
        </div>
      </div>

      <div className="max-w-7xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Billing Details */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="w-full border p-2 rounded-md" required />
            <input type="text" placeholder="Last Name" className="w-full border p-2 rounded-md" required />
            <input type="email" placeholder="Email Address" className="w-full border p-2 rounded-md" required />
            <input type="text" placeholder="Street Address" className="w-full border p-2 rounded-md" required />
            <input type="text" placeholder="City" className="w-full border p-2 rounded-md" required />
            <input type="text" placeholder="ZIP Code" className="w-full border p-2 rounded-md" required />
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.title} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span className="text-[#B88E2F]">${totalAmount.toFixed(2)}</span>
          </div>

          {error && (
            <div className="text-red-500 mb-4">
              {error}
            </div>
          )}

          <button
            onClick={handleCheckout}
            className="w-full py-3 rounded-lg bg-black text-white hover:bg-gray-700"
            disabled={loading}
          >
            {loading ? "Processing..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
}
