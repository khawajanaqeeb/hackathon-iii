// app/contact/page.tsx
import React from "react";
import Image from "next/image";
import ContactInfo from "../components/ContactInfo";
import LastSection from "../components/Lastsection";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <div className="relative w-full h-[316px]">
        <Image src="/shop1.png" alt="background-shop" fill className="object-cover" />
        <Image
          src="/mh.png"
          className="absolute w-[50px] h-[41px] top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt="Logo"
          width={50}
          height={41}
        />
        <h2 className="absolute text-5xl font-medium top-20 left-1/2 transform -translate-x-1/2 text-black">Contact</h2>
        <div className="absolute flex items-center space-x-2 top-40 left-1/2 transform -translate-x-1/2">
          <h3 className="text-black"><Link href="./">Home </Link></h3>
          <Image src="/arw.png" alt="arrow" width={20} height={20} />
          <h3 className="text-gray-500"> <Link href="./contact">Contact </Link></h3>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full py-16 px-8">
        <h1 className="text-center text-4xl font-semibold">Get In Touch With Us</h1>
        <p className="mt-4 text-center text-base text-gray-500 mx-auto max-w-lg">
          For more information about our products & services, feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
        </p>

        <div className="flex flex-wrap justify-center mt-10 space-y-10 lg:space-y-0 lg:space-x-20">
          {/* Contact Info */}
          <div className="w-full max-w-sm">
            <ContactInfo
              icon="bi bi-geo-alt-fill"
              title="Address"
              description="236 5th SE Avenue, New York NY10000, United States"
            />
            <ContactInfo
              icon="bi bi-telephone-fill"
              title="Phone"
              description="Mobile: +(84) 546-6789 Hotline: +(84) 456-6789"
            />
            <ContactInfo
              icon="bi bi-clock-fill"
              title="Working Time"
              description="Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00"
            />
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="abc"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-black font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-black font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is optional"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-black font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi! I would like to ask about..."
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-yellow-600 hover:bg-yellow-700 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <LastSection/>
    </>
  );
}
