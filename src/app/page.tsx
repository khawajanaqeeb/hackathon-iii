
import React from "react";

import Image from "next/image";
// import OurProducts from "./components/ProductList";
import ProductList from "./components/ProductList";


export default function Home() {
  return (
    <div className="bg-white ">
      {/* Hero Section */}
      <div className=" bg-[url('/bit.jpg')] h-[880px] bg-cover bg-center flex items-center justify-center">
        <div className="bg-[#FFF3E3] w-[643px] h-[443px] ml-[600px] mt-[200px]  rounded-lg  text-left">
              <div className="w-[561px] h-[334px] m-10">
              <h2 className="text-[#333333] font-semibold text-base pt-10">New Arrival</h2>
              <h1 className="text-[#B88E2F]  w-[400px] h-[127px] font-bold text-[52px] mt-4">
              Discover Our New Collection
              </h1>
              <p className="text-[#333333] w-[546px] h-[52px] font-medium text-lg mt-8">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
                  <div className="mt-5 w-[222px] h-[72px]">
                      <button className="bg-[#B88E2F] text-white px-6 py-3 mt-18 rounded-sm w-full h-full font-bold text-base">
                      BUY NOW
                      </button>
                   </div>
              </div>
        </div>
      </div>

      {/* Browse The Range */}
      <div className="text-center mt-12">
        <h2 className="text-[#333333] font-bold text-3xl">Browse The Range</h2>
        <p className="text-[#666666] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
          {["Dining", "Living", "Bed Room"].map((item, index) => (
            <div key={index} className="text-center">
              <Image
                src={`/mg${index + 1}.png`}
                alt={item}
                width={200}
                height={480}
                className="w-full h-[480px] object-cover"
              />
              <h2 className="mt-4 text-[#333333] text-2xl font-semibold">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Our Products */}
      <ProductList/>
        
      

      {/* Inspiration Section */}
      <div className="bg-[#FCF8F3] mt-16 py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-2 px-4">
          <div className="lg:w-[600px] sm:w-[200px] md:w-[350px] p-20  text-left lg:text-left">
            <h2 className="text-[#3A3A3A] font-bold text-4xl">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-[#616161]  mt-4">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you.
            </p>
            <button className="bg-[#B88E2F] text-white px-6 py-3 mt-4 rounded-md font-medium">
              Explore More
            </button>
          </div>
          <div className="lg:w-[750px] sm:w-[300px] md:w-[500px] flex sm:flex-col md:flex-row gap-4 justify-center">
            <Image
              src="/r1.png"
              alt="Room 1" width={280} height={280}
              className=" lg:w-[280px] sm:w-[100px] md:w-[180px] h-auto"
            />
            <Image
              src="/r2.png"
              alt="Room 2" width={300} height={350}
              className=" lg:w-[300px] sm:w-[100px] md:w-[200px] h-[350px]"
            />
            
          </div>
        </div>
      </div>

      {/* Share Your Setup */}
      <div className="mt-16 text-center">
        <p className="text-[#616161] text-lg">Share your setup with</p>
        <h2 className="text-[#3A3A3A] font-bold text-4xl">#FuniroFurniture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 px-4 md:px-16">
          {Array.from({ length: 9 }, (_, index) => (
            <Image
              key={index}
              src={`/ff${index + 1}.png`}
              alt={`Furniture ${index + 1}`}
              width={200}
              height={200}
              className="w-[300px] h-[500px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}