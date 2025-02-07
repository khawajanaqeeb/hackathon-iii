import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  productImage?: { asset: { url: string } };
  images?: { asset: { url: string } }[];
  size?: string[];
  color?: string[];
  sku: string;
  category: string;
  tags?: string[];
  slug: { current: string };
  discountPercentage?: string;
}

// ✅ Fetch product data based on slug
async function getData(slug: string): Promise<Product | null> {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id, title, description, price, originalPrice, 
    productImage { asset -> { url } },
    images[] { asset -> { url } },
    size, color, sku, category, tags, slug, discountPercentage
  }`;

  try {
    const product = await client.fetch(query, { slug });
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// ✅ Fix: Ensure only valid products are used for static generation
export async function generateStaticParams() {
  const query = `*[_type == "product"] { slug }`;
  const products = await client.fetch(query);

  const validProducts = products.filter(
    (product: { slug?: { current?: string } }) => product.slug?.current
  );

  return validProducts.map((product:Product) => ({
    slug: product.slug!.current, // Safe now
  }));
}

// ✅ Product Page Component
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getData(params.slug);

  if (!product) {
    console.error("Product not found for slug:", params.slug);
    return notFound();
  }

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="flex items-center flex-wrap space-x-2 text-sm md:text-base text-[#9F9F9F] bg-[#F9F1E7] h-[100px] px-4">
        <a href="/" className="hover:text-gray-800 ml-[48px]">Home</a>
        <span className="text-black">{">"}</span>
        <a href="/shop" className="hover:text-gray-800">Shop</a>
        <span className="text-black">{">"}</span>
        <span className="text-black font-semibold truncate">{product.title}</span>
      </div>

      {/* Product Details */}
      <div className="h-[820px] w-full flex justify-evenly items-center">
        <div className="h-[730px] w-[80%] flex justify-around items-start gap-5">
          
          {/* Product Images (Side Thumbnails) */}
          <div className="w-[76px] h-[416px] flex flex-col space-y-2">
            {product.images?.map((image, index) => (
              <div key={index} className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]">
                <Image
                  src={image?.asset?.url || "/fallback.jpg"}
                  alt={`Product Image ${index + 1}`}
                  width={76}
                  height={80}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="w-[423px] h-[500px] bg-[#F9F1E7] flex items-center rounded-[10px]">
            <Image
              src={product.productImage?.asset?.url || "/fallback.jpg"}
              alt={product.title}
              width={481}
              height={391}
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="w-[607px] flex flex-col gap-5">
            <h1 className="text-[42px] font-normal">{product.title}</h1>
            <h1 className="text-2xl font-medium text-[#9F9F9F]">${product.price}</h1>
            <p className="text-[13px]">{product.description}</p>

            {/* Size Options */}
            {product.size?.length ? (
              <div>
                <h2 className="text-[#9F9F9F]">Size</h2>
                <div className="flex gap-4">
                  {product.size.map((size) => (
                    <button key={size} className="w-[30px] h-[30px] bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-md">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Color Options */}
            {product.color?.length ? (
              <div>
                <h2 className="text-[#9F9F9F]">Color</h2>
                <div className="flex gap-4">
                  {product.color.map((color, index) => (
                    <button key={index} className="w-[30px] h-[30px] rounded-full" style={{ backgroundColor: color }}></button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Actions */}
            <div className="flex gap-4">
              <button className="w-[123px] h-[64px] border rounded-[10px] border-[#9F9F9F]">- 1 +</button>
              <button className="w-[215px] h-[64px] border rounded-[10px] border-black">Add To Cart</button>
              <button className="w-[215px] h-[64px] border rounded-[10px] border-black">+ Compare</button>
            </div>

            <div className="border-t border-[#D9D9D9] mt-10"></div>

            {/* Additional Info */}
            <div className="p-6">
              <div className="flex space-x-2">
                <span className="text-[#9F9F9F]">SKU:</span>
                <span>{product.sku}</span>
              </div>
              <div className="flex space-x-2 mt-2">
                <span className="text-[#9F9F9F]">Category:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex space-x-2 mt-2">
                <span className="text-[#9F9F9F]">Tags:</span>
                <span>{product.tags?.join(", ") || "N/A"}</span>
              </div>
              <div className="flex space-x-2 mt-2">
                <span className="text-[#9F9F9F]">Share:</span>
                <div className="flex space-x-4 text-gray-700">
                  <a href="#" className="hover:text-blue-600"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#" className="hover:text-blue-500"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="#" className="hover:text-black"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
