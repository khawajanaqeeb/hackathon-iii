import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#FFFFFF] py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <div>
            <h2 className="text-2xl font-bold">Funiro.</h2>
            <p className="mt-4 text-sm text-[#9F9F9F]">
              400 University Drive Suite 200 <br />
              Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-base font-medium text-[#9F9F9F]">Links</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-black font-medium">
                <Link href="/">Home</Link>
              </li>
              <li className="text-black font-medium">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="text-black font-medium">
                <Link href="/about">About</Link>
              </li>
              <li className="text-black font-medium">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="text-base font-medium text-[#9F9F9F]">Help</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-black font-medium">
                <Link href="/checkout">Payment Options</Link>
              </li>
              <li className="text-black font-medium">
                <Link href="/return">Return</Link>
              </li>
              <li className="text-black font-medium">
                <Link href="/privacy-policy">Privacy Policies</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-base font-medium text-[#9F9F9F]">Newsletter</h2>
            <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full md:w-auto px-4 py-2 border border-[#9F9F9F] rounded-md text-sm text-[#9F9F9F]"
              />
              <button className="px-4 py-2 bg-black text-white text-sm rounded-md">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-[#9F9F9F]">
          2023 Funiro. All rights reserved.
        </div>
      </div>
    </div>
  );
}
