import React from 'react';
import Image from 'next/image';

const ProductRange = () => {
  return (
    <div>
      {/* Browse The Range */}
      <div className="text-center mt-12 px-4 sm:px-6 md:px-8">
        <h2 className="text-[#333333] font-bold text-3xl sm:text-4xl lg:text-5xl">
          Browse The Range
        </h2>
        <p className="text-[#666666] mt-2 text-sm sm:text-base lg:text-lg">
          Explore our wide selection of beautifully designed furniture, perfect for every space.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Dining", "Living", "Bed Room"].map((item, index) => (
            <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300">
                <Image
                  src={`/mg${index + 1}.png`}
                  alt={item}
                  width={200}
                  height={480}
                  className="w-full h-[480px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h2 className="mt-4 text-[#333333] text-xl sm:text-2xl lg:text-3xl font-semibold group-hover:text-[#B88E2F] transition-all duration-300">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
