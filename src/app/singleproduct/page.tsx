import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react';

// Product Data
const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/sh1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: null,
    image: "/sh2.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/sh3.png",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: null,
    image: "/sh4.png",
  },
];


export default function SingleProduct() {
  return (
    <div>
      <div className=" flex items-center flex-wrap space-x-2 text-sm md:text-base text-[#9F9F9F] bg-[#F9F1E7] h-[100px] px-4">
        <a href="/" className="hover:text-gray-800 ml-[48px]">
          Home
        </a>
        <span className=" text-black ">{">"}</span>
        <a href="/shop" className="hover:text-gray-800">
          Shop
        </a>
        <span className=" text-black">{">"}</span>
        <span className=" text-black">|</span>
        <span className="font-semibold text-black truncate">Asgaard Sofa</span>
      </div>
      <div className="h-[820px] w-full  flex justify-evenly items-center ">
        <div className="h-[730px] w-[80%] flex justify-around items-start gap-5 ">
          {/* First Child Div */}
          <div className="w-[76px] h-[416px]  flex flex-col space-y-2 justify-start items-center">
            <div className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]">
              <Image
                src="/ss1.png"
                alt="Image 1"
                width={83}
                height={55}
                className="object-cover "
              />
            </div>
            <div className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]">
              <Image
                src="/ss2.png"
                alt="Image 2"
                width={76}
                height={80}
                className="object-cover "
              />
            </div>
            <div className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]">
              <Image
                src="/ss3.png"
                alt="Image 3"
                width={76}
                height={80}
                className=" object-cover "
              />
            </div>
            <div className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]">
              <Image
                src="/ss4.png"
                alt="Image 4"
                width={76}
                height={80}
                className="object-cover "
              />
            </div>
          </div>

          {/* Second Child Div */}
          <div className="w-[423px] h-[500px] bg-[#F9F1E7] flex items-center rounded-[10px]">
            <div className="w-[481px] h-[391px]  ">
              <Image
                src="/as.png"
                alt="Image 4"
                width={481}
                height={391}
                className="object-cover "
              />
            </div>
          </div>

          {/* Third Child Div */}
          <div className="w-[607px] h-[730px]  flex flex-col gap-5">
            <h1 className="text-[42px] font-normal">Asgaard sofa</h1>
            <h1 className="text-2xl font-medium text-[#9F9F9F]">
              Rs. 250,000.00
            </h1>
            <p className="w-[424px] h-[80px] text-[13px] font-normal">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            <h2 className="w-[27px] h-[21px] text-[#9F9F9F]">Size</h2>
            <div className="flex items-center gap-4">
              <button className="w-[30px] h-[30px] bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-md">
                L
              </button>
              <button className="w-[30px] h-[30px] bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-md">
                XL
              </button>
              <button className="w-[30px] h-[30px] bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-md">
                SX
              </button>
            </div>
            <h2 className="w-[38px] h-[21px] text-[#9F9F9F]">Color</h2>
            <div className="flex items-center gap-4">
              <button className="w-[30px] h-[30px] rounded-full bg-[#816DFA]"></button>
              <button className="w-[30px] h-[30px] rounded-full bg-[#000000]"></button>
              <button className="w-[30px] h-[30px] rounded-full bg-[#B88E2F]"></button>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-[123px] h-[64px] border-[1px] rounded-[10px] border-[#9F9F9F]">
                - 1 +
              </button>
              <button className="w-[215px] h-[64px] border-[1px] rounded-[10px] border-black">
                Add To Cart
              </button>
              <button className="w-[215px] h-[64px] border-[1px] rounded-[10px] border-black">
                + Compare
              </button>
            </div>
            <div className="w-[606px] h-[0px] border-[1px] bg-[#D9D9D9] mt-10"></div>
            <div className="p-6">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-[#9F9F9F]">SKU</span>
                <span className=":">:</span>
                <span className="text-[#9F9F9F]">SS001</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="font-medium text-[#9F9F9F]">Category</span>
                <span className=":">:</span>
                <span className="text-[#9F9F9F]">Sofas</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="font-medium text-[#9F9F9F]">Tags</span>
                <span className=":">:</span>
                <span className="text-[#9F9F9F]">Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="font-medium text-[#9F9F9F]">Share</span>
                <span className=":">:</span>
                <div className="flex space-x-4 text-gray-700">
                  <a href="#" className="hover:text-blue-600">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#" className="hover:text-blue-500">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="#" className="hover:text-black">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            <div  className='h-[744px] border-1  flex flex-col items-center gap-10 '>
                
                 {/* Tabs Section */}
                  <div className=" w-[649px] h-[36px] flex items-center border-b  mt-10 ">
                        <button className="px-4 py-2 text-black border-b-2 border-black font-medium text-2xl ">
                         Description
                        </button>
                        <button className="px-4 py-2 text-[#9F9F9F] hover:text-gray-900 font-normal text-2xl">
                        Additional Information
                        </button>
                      <button className="px-4 py-2 text-[#9F9F9F] hover:text-gray-900 font-normal text-2xl">
                       Reviews [5]
                      </button>
                  </div>

                 {/* Text Content */}
                 <div className="mb-6">
                 <p className="text-[#9F9F9F] mb-4 w-[1026px] h-[48px] text-justify">
                 Embodying the raw, wayward spirit of rock & roll, the Kilburn portable active stereo speaker
                 takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                  </p>
                 <p className="text-[#9F9F9F] mb-4 w-[1026px] h-[96px] text-justify ">
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the
                   bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
                   well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate
                   and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while
                  the guitar-influenced leather strap enables easy and stylish travel.
                   </p>
                  </div>

                  {/* Product Images */}
                  <div className="grid grid-cols-2 gap-4">
                 <Image
                  src="/sofa1.png"
                 alt="Sofa 1"
                 width={100}
                 height={100}
                 className="w-full h-auto rounded-lg shadow-md bg-[#F9F1E7]"
                   />
                 <Image
                   src="/sofa2.png"
                  alt="Sofa 2"
                  width={100}
                  height={100}
                  className="w-full h-auto rounded-lg shadow-md bg-[#F9F1E7]"
                   />
                  </div>
                    
              
            </div>            

         {/* Related Products Section */}

                  <div className='h-[777px]  '>

                   <h1 className='text-center text-4xl font-medium pt-10'>Related Products</h1>
                      <div className="grid grid-cols-4 gap-5 px-10 py-10">
        
                       {products.map((product) => (
                          <div key={product.id} className="p-4 border hover:shadow-md">
                            <Image src={product.image} alt={product.name} width={285} height={301} />
                            <h2 className="mt-2 text-2xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="mt-2 text-xl font-semibold">
                             {product.price}
                            {product.originalPrice && (
                             <span className="ml-2 line-through text-gray-400">{product.originalPrice}</span>
                            )}
                            </p>
                          </div>
                       ))}
                      </div>
                          
                           <button className='className= w-[245px] h-[48px] text-center justify-center rounded-[1px] text-[#B88E2F] text-base font-semibold border-[1px] border-[#B88E2F]   ml-[45%]' >Show More</button>
                          
                  </div>

    </div>
  );
}
