import Image from "next/image";
import LastSection from "../components/Lastsection";


export default function Checkout() {
    return (


    <div>
        {/* Header Section */}
              <div className="relative w-full h-[316px]">
                <Image src="/shop1.png" alt="background-shop" layout="fill" objectFit="cover" />
                <Image src="/mh.png" width={50} height={41} className="absolute w-[50px] h-[41px] top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2" alt="Icon" />
                <h2 className="absolute text-5xl font-medium text-black top-[40%] left-[50%] transform -translate-x-1/2">Checkout</h2>
                <div className="absolute top-[58%] left-[50%] transform -translate-x-1/2">
                  <h3 className="inline text-black">Home</h3>
                  <Image src="/arw.png" alt="arrow" width={20} height={20} className="inline mx-2" />
                  <h3 className="inline text-base font-light">Checkout</h3>
                </div>
              </div>
      <div className="max-w-7xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* Billing Details */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block font-medium mb-1">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="country" className="block font-medium mb-1">
                Country/Region
              </label>
              <select
                id="country"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500 text-[#9F9F9F]"
              >
                <option>Srilanka</option>
                <option>Pakistan</option>
                <option>India</option>
                <option>USA</option>
                <option>Canada</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block font-medium mb-1">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="city" className="block font-medium mb-1">
                Town/City
              </label>
              <input
                type="text"
                id="city"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="state" className="block font-medium mb-1">
                Province
              </label>
              <input
                type="text"
                id="state"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="zip" className="block font-medium mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block font-medium mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block font-medium mb-1">
                
              </label>
              <input
              placeholder="Additional Information"
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Product</span>
            <span className="font-semibold">Subtotal</span>
          </div>
          <div className="flex justify-between border-b pb-4 mb-4">
            <span>Asgaard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span className="text-[#B88E2F]">Rs. 250,000.00</span>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">
              <input
                type="radio"
                name="paymentMethod"
                className="mr-2"
                defaultChecked
              />
              Direct Bank Transfer
            </label>
            <p className="text-sm text-gray-500 mb-4">
              Make your payment directly into our bank account. Please use
              your Order ID as the payment reference. Your order will not be
              shipped until the funds have cleared in our account.
            </p>
            <label className="block font-medium mb-2">
              <input
                type="radio"
                name="paymentMethod"
                className="mr-2"
              />
              Cash On Delivery
            </label>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a href="#" className="text-black font-bold">privacy policy</a>.
          </p>
          <button className="w-[318px] h-[64px] border-[1px] border-black py-3 rounded-lg hover:bg-[#B88E2F]">
            Place order
          </button>
        </div>
      </div>
      <LastSection/>
    </div>
    );
}
