import React from 'react'
import Image from 'next/image'

const InspirationSection = () => {
  return (
    
      
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
    
  )
}

export default InspirationSection
