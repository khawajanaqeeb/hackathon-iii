"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header(data: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu visibility

  return (
    <div className={`${data.font.className} bg-[#FFFFFF] fixed top-0 left-0 w-full z-50 shadow-md`}>
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/mh.png"
            alt="Logo"
            width={50}
            height={41}
            className="w-[50px] h-[41px]"
          />
          <h2 className="text-[24px] md:text-[34px] font-bold text-[#000000] ml-2">
            Furniro
          </h2>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-black font-semibold text-sm md:text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger Icon for Mobile Menu */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-black focus:outline-none">
            <i className="bi bi-list text-2xl"></i> {/* Hamburger icon */}
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          {/* Sign In Button (Visible when user is NOT signed in) */}
          <SignedOut>
            <SignInButton>
              <button className="bg-[#FFF3E3] rounded-md text-black px-4 py-2 shadow-md hover:shadow-lg transition-shadow md:w-auto w-full">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          {/* Cart, Favorites & Search Icons */}
          <Link href="/cart"><i className="bi bi-search text-xl md:text-2xl"></i></Link>
          <Link href="/favorites"><i className="bi bi-heart text-xl md:text-2xl"></i></Link>
          <Link href="/cart"><i className="bi bi-cart3 text-xl md:text-2xl"></i></Link>

          {/* User Profile Button (Only when signed in) */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu (Visibility controlled by state) */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg z-40">
          <ul className="flex flex-row items-center justify-center space-x-6 text-sm font-semibold text-black p-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}
