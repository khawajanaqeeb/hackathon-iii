import React from 'react';
import Image from 'next/image';

const InspirationSection = () => {
  return (
    <div className="bg-[#FCF8F3] mt-16 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 px-6">
        <div className="lg:w-[600px] sm:w-full p-8 text-center lg:text-left">
          <h2 className="text-[#3A3A3A] font-bold text-3xl sm:text-4xl lg:text-5xl">
            50+ Beautiful Room Inspirations
          </h2>
          <p className="text-[#616161] mt-4 text-sm sm:text-base lg:text-lg">
            Our designers have created a variety of beautiful room prototypes
            that are sure to inspire you.
          </p>
          <button className="bg-[#B88E2F] text-white px-6 py-3 mt-6 rounded-md font-medium hover:bg-[#9A6B2A] transition duration-300">
            Explore More
          </button>
        </div>
        <div className="lg:w-[750px] sm:w-full md:w-[500px] flex flex-wrap gap-6 justify-center">
          <div className="w-[280px] sm:w-[200px] md:w-[250px] h-auto">
            <Image
              src="/r1.png"
              alt="Room 1"
              width={280}
              height={280}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-[300px] sm:w-[200px] md:w-[250px] h-auto">
            <Image
              src="/r2.png"
              alt="Room 2"
              width={300}
              height={350}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationSection;
