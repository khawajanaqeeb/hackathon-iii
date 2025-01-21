
import Image from "next/image";

export default function LastSection() {
  const features = [
    { icon: "/g1.png", title: "High Quality", text: "Crafted from top materials" },
    { icon: "/g2.png", title: "Warranty Protection", text: "Over 2 years" },
    { icon: "/g3.png", title: "Free Shipping", text: "Order over $150" },
    { icon: "/g4.png", title: "24/7 Support", text: "Dedicated support" },
  ];

  return (
    <div className="w-full bg-[#FAF3EA] mt-10 py-12 flex flex-wrap justify-evenly">
      {features.map((item, index) => (
        <div key={index} className="flex items-center space-x-4 mb-6 md:mb-0">
          <Image src={item.icon} alt={item.title} width={60} height={60} />
          <div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}



