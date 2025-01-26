import Image from "next/image";
import LastSection from "../components/Lastsection";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      {/* Header Section */}
      <div className="relative w-full h-[316px]">
        <Image src="/shop1.png" alt="background-shop" layout="fill" objectFit="cover" />
        <Image src="/mh.png" width={50} height={41} className="absolute w-[50px] h-[41px] top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2" alt="Icon" />
        <h2 className="absolute text-5xl font-medium text-black top-[40%] left-[50%] transform -translate-x-1/2">Blog</h2>
        <div className="absolute top-[58%] left-[50%] transform -translate-x-1/2">
          <h3 className="inline text-black"><Link href="/.">  Home </Link></h3>
          <Image src="/arw.png" alt="arrow" width={20} height={20} className="inline mx-2" />
          <h3 className="inline text-base font-light"><Link href="/blog">  Blog </Link></h3>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap justify-center mt-10">
        {/* Blog Posts */}
        <div className="flex flex-col w-[60%] space-y-10">
          {[1, 2, 3].map((post, index) => (
            <div key={index} className="space-y-4">
              <Image src={`/Rec${post}.png`} alt={`blog${post}`} width={817} height={500} className="rounded-lg" />
              <div className="flex gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                  <Image src="/blog-man.png" alt="Author" width={20} height={20} />
                  <p>Admin</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/blog-calander.png" alt="Date" width={20} height={20} />
                  <p>14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/blog-clip.png" alt="Category" width={24} height={24} />
                  <p>Wood</p>
                </div>
              </div>
              <h3 className="text-3xl font-medium">Blog Title Here</h3>
              <p className="text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a href="#" className="text-black underline">Read more</a>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-[30%] space-y-10">
          {/* Search */}
          <div className="p-5 border rounded-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border-b focus:outline-none"
            />
          </div>
          {/* Categories */}
          <div>
            <h2 className="text-2xl font-medium">Categories</h2>
            <ul className="space-y-2 text-gray-500">
              {["Crafts", "Designs", "Hand Made", "Interior", "Wood"].map((category) => (
                <li key={category} className="flex justify-between hover:underline">
                  <span>{category}</span>
                  <span>2</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-medium">Recent Posts</h2>
            {[1, 2, 3, 4, 5].map((post) => (
              <div key={post} className="flex mt-5">
                <Image src={`/rp${post}.png`} alt="recent-post" width={80} height={80} className="rounded" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium">Post Title Here</h3>
                  <p className="text-xs text-gray-500">03 Aug 2022</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-10">
        <button className="w-10 h-10 bg-yellow-500 text-white rounded">1</button>
        <button className="w-10 h-10 bg-gray-200 rounded">2</button>
        <button className="w-10 h-10 bg-gray-200 rounded">3</button>
        <button className="w-20 h-10 bg-gray-200 rounded">Next</button>
      </div>
      <LastSection/>
    </>
  );
}
