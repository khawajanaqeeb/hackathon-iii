import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[url('/bit.jpg')] h-[880px] bg-cover bg-center flex items-center justify-center">
      <div className="bg-[#FFF3E3] w-full sm:w-[643px] h-[443px] sm:ml-[600px] sm:mt-[200px] rounded-lg text-left px-6 sm:px-10">
        <div className="w-full h-auto sm:w-[561px] sm:h-[334px] m-10">
          <h2 className="text-[#333333] font-semibold text-base pt-10">New Arrival</h2>
          <h1 className="text-[#B88E2F] w-full sm:w-[400px] h-auto font-bold text-[36px] sm:text-[52px] mt-4">
            Discover Our New Collection
          </h1>
          <p className="text-[#333333] w-full sm:w-[546px] h-auto font-medium text-lg mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="mt-5 w-full sm:w-[222px] h-auto sm:h-[72px]">
            <button className="bg-[#B88E2F] text-white px-6 py-3 mt-18 rounded-sm w-full h-full font-bold text-base">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
