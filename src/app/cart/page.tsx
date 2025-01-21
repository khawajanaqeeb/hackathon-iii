import Image from "next/image";
import LastSection from "../components/Lastsection";


export default function CartPage() {
    return (
      <div className="min-h-screen ">
        
        {/* Header */}
        <div className="relative w-full h-[316px]">
                <Image src="/shop1.png" alt="background-shop" fill className="object-cover" />
                <Image
                  src="/mh.png"
                  className="absolute w-[50px] h-[41px] top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  alt="Logo"
                  width={50}
                  height={41}
                />
                <h2 className="absolute text-5xl font-medium top-20 left-1/2 transform -translate-x-1/2 text-black">Cart</h2>
                <div className="absolute flex items-center space-x-2 top-36 left-1/2 transform -translate-x-1/2">
                  <h3 className="text-black">Home</h3>
                  <Image src="/arw.png" alt="arrow" width={20} height={20} />
                  <h3 className="text-gray-500">Cart</h3>
                </div>
              </div>
        
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Table */}
          <div className="col-span-2">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left bg-[#F9F1E7]">
                    <th className="py-3 px-2 sm:px-4 text-sm sm:text-base">Product</th>
                    <th className="py-3 px-2 sm:px-4 text-sm sm:text-base">Price</th>
                    <th className="py-3 px-2 sm:px-4 text-sm sm:text-base">Quantity</th>
                    <th className="py-3 px-2 sm:px-4 text-sm sm:text-base">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-4 px-2 sm:px-4 flex items-center">
                      <Image
                        src="/as.png"
                        alt="Asgard Sofa"
                        width={108}
                        height={105}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded object-cover mr-2 sm:mr-4"
                      />
                      <span className="font-medium text-sm sm:text-base">Asgard Sofa</span>
                    </td>
                    <td className="py-4 px-2 sm:px-4 text-sm sm:text-base">Rs. 250,000.00</td>
                    <td className="py-4 px-2 sm:px-4">
                      <input
                        type="number"
                        defaultValue="1"
                        className="w-10 sm:w-12 border rounded text-center text-sm sm:text-base"
                      />
                    </td>
                    <td className="py-4 px-2 sm:px-4 text-sm sm:text-base">Rs. 250,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Cart Totals */}
          <div className="bg-[#F9F1E7] text-center shadow rounded-lg p-4 sm:p-6">
            <h2 className="text-[32px] sm:text-2xl font-semibold text-black border-b pb-2 sm:pb-4 mb-4">
              Cart Totals
            </h2>
            <div className="text-sm sm:text-lg">
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span className="font-medium">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between py-2 border-t">
                <span>Total</span>
                <span className="font-bold text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
            </div>
            <button className="w-[222px] h-[59px] mt-4 sm:mt-6 border-[1px] border-black text-black py-2 rounded-[15px] text-xl font-normal sm:text-base">
              Check Out
            </button>
          </div>
        </div>
        <LastSection/>
      </div>
    );
  }
  