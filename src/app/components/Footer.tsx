export default function Footer() {
    return (
      <div className="w-[1440px] h-[505px] mt-[4000px] border-2">
        <div className="w-[1240px] h-[419px] pt-[48px] ml-[100px] bg-[#FFFFFF]  ">
          <div className="flex justify-evenly">
            <div>
            <h2 className="w-[85px] h-[36px] mt-[48px] ml-[100px]  font-[700] text-2xl ">
              Funiro.
            </h2>
            <p className="w-[285px] h-[72px] mt-[10%] ml-[102.01px] text-[#9F9F9F]  font-normal gap-2">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
            </div>
          <div className=" w-[68px] h-[312px] mt-[48px] ">
            <h2 className="w-[40px] h-[24px] text-[#9F9F9F] font-[500] text-base">Links</h2>
            <ul className="mt-[35px]">
              <li className="mt-[10%] font-[500] text-black">Home</li>
              <li className="mt-[50%] font-[500] text-black">Shop</li>
              <li className="mt-[60%] font-[500] text-black">About</li>
              <li className="mt-[90%] font-[500] text-black">Contact</li>
            </ul>
          </div>
          <div className="w-[140px] h-[242px] mt-[48px] ">
            <h2 className="w-[40px] h-[24px] text-[#9F9F9F] font-[500] text-base">Help</h2>
            <ul>
              <li className="mt-[30%] font-[500] text-black">Payment Options </li>
              <li className="mt-[30%] font-[500] text-black">Return</li>
              <li className="mt-[40%] font-[500] text-black">Privacy Policies</li>
            </ul>
          </div>
          <div className="w-[286px] h-[101px] mt-[48px] ">
          <h2 className="w-[86px] h-[24px] text-[#9F9F9F] ">Newsletter</h2>
          <div className="flex">
          <input className="w-[173px] h-[21px] text-sm font-normal text-[#9F9F9F] mt-[19%]" type="email" placeholder="Enter Your Email Address"/>
          <h2 className="w-[25px] h-[21px] text-black font-medium mt-[19%] ml-[10%] ">SUBSCRIBE</h2></div>
          </div>
          </div>
          </div>
          <div className="w-[1240.01px] h-[59px] ml-[100px]"> 
            <p className="w-[239px] h-[24px] ml-[159.02px] pt-8">2023 furino. All rights reverved</p>
        </div>
      </div>
    );
  }
  