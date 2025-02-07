'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const ShareYourSetup = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = Array.from({ length: 9 }, (_, index) => `/ff${index + 1}.png`)

  // Auto-sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Slide every 3 seconds

    return () => clearInterval(interval)
  }, [images.length]) // Add images.length as a dependency

  return (
    <div className="mt-16 text-center">
      <p className="text-[#616161] text-lg">Share your setup with</p>
      <h2 className="text-[#3A3A3A] font-bold text-4xl">#FuniroFurniture</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 px-4 md:px-16">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={image}
              alt={`Furniture ${index + 1}`}
              width={index === currentImageIndex ? 300 : 200} // Larger size for current image
              height={index === currentImageIndex ? 300 : 200} // Adjust height for the current image
              className="w-full h-auto object-cover rounded-lg transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShareYourSetup
