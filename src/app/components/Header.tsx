import React from "react";
import Link from "next/link";
import Image from "next/image";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"
/>


export default function Header(data: any) {
  return (
    <div className={`${data.font.className} bg-[#FFFFFF]`}>
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

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-black font-semibold text-sm md:text-base">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
        <Link href="/login"><i className="bi bi-person-exclamation text-xl md:text-2xl"></i></Link>
        <Link href="/cart"><i className="bi bi-search text-xl md:text-2xl"></i></Link>
        <Link href="/favorites"> <i className="bi bi-heart text-xl md:text-2xl"></i></Link>
          <Link href="/cart"><i className="bi bi-cart3 text-xl md:text-2xl" ></i></Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Added responsive menu for smaller screens */}
      <ul className="flex justify-around items-center space-x-4 text-sm font-semibold text-black md:hidden">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

        
    