import React from 'react'
import Image from 'next/image'
const ProductRange = () => {
  return (
    <div>
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
    </div>
  )
}

export default ProductRange
