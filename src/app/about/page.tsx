import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#FFFFFF] text-black">
      {/* Hero Section */}
      <section className="bg-[#f5f5f5] py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-[#B88E2F] font-bold">About Furniro</h1>
          <p className="mt-4  text-lg">
            Discover elegance and comfort with Furniro. Your trusted furniture
            partner across Pakistan.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 md:px-8 bg-[#FFF3E3]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold  mb-4">Crafting Dreams into Reality</h2>
            <p className="text-[#9F9F9F] text-lg leading-relaxed">
              At Furniro, we are dedicated to designing and delivering
              high-quality furniture that transforms your space into a blend of
              elegance and comfort. Based in Karachi, Pakistan, we serve
              customers nationwide with our premium furniture collections.
            </p>
            <p className="text-[#9F9F9F] text-lg leading-relaxed  mt-4">
              With a passion for craftsmanship and a focus on customer
              satisfaction, our team ensures every piece of furniture meets the
              highest standards of design and functionality.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <Image
              src="/our-furniture.jpg"
              alt="Furniture Showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#f5f5f5] py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-[#9F9F9F] text-lg">
            To create stylish, durable, and affordable furniture that brings
            joy and comfort to homes and offices across Pakistan.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Why Choose Furniro?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f5] p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p className="text-[#9F9F9F] mt-4">
                Our furniture is crafted with the finest materials and expert
                craftsmanship to ensure durability and elegance.
              </p>
            </div>
            <div className="bg-[#f5f5f5] p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Nationwide Delivery</h3>
              <p className="text-[#9F9F9F] mt-4">
                Based in Karachi, we offer reliable delivery services to all
                corners of Pakistan.
              </p>
            </div>
            <div className="bg-[#f5f5f5] p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Customer Satisfaction</h3>
              <p className="text-[#9F9F9F] mt-4">
                We value our customers and prioritize your satisfaction with
                every purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="bg-[#FFF3E3] py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Furnish Your Dream Space?</h2>
          <p className="mt-4 text-lg text-[#9F9F9F]">
            Explore our latest collections and transform your home or office
            today!
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-black font-medium rounded-lg shadow-lg">
            Browse Our Products
          </button>
        </div>
      </section>
    </div>
  );
}
