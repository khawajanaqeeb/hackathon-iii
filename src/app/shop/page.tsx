import Image from "next/image";
import LastSection from "../components/Lastsection";
import Link from "next/link";


export default function Shop() {
  return (
    <div className="bg-white border-2">
      {/* Header */}
      <div className="relative w-full h-[316px]">
        <Image src="/shop1.png" alt="Shop Background" fill className="object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Image
                  src="/mh.png"
                  className="absolute w-[50px] h-[41px] top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  alt="Logo"
                  width={50}
                  height={41}
                />
          <h2 className="text-5xl mt-5 font-medium text-black">Shop</h2>
          <div className="flex items-center justify-center mt-2 gap-2">
            <span className="text-black"><Link href="/.">  Home </Link></span>
            <Image src="/arw.png" alt="Arrow" width={20} height={20} />
             <span className="text-black"> <Link href="/shop">Shop</Link> </span> 
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex items-center justify-between px-10 py-5 bg-[#F9F1E7] border-2">
        <div className="flex items-center gap-3">
          <Image src="/sys.png" alt="Filter Icon" width={25} height={25} />
          <span className="text-xl">Filter</span>
        </div>
        <div className="text-gray-500">Showing 1-16 of 32 results</div>
        <div className="flex items-center gap-4">
          <span className="text-xl">Show</span>
          <button className="px-4 py-2 border">16</button>
          <span className="text-xl">Sort by</span>
          <button className="px-4 py-2 border">Default</button>
        </div>
      </div>

      
      <LastSection/>
    </div>
  );
}
