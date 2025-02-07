import React from 'react'
import Image from 'next/image'
const ShareYoursetup = () => {
  return (
    
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
  )
}

export default ShareYoursetup
