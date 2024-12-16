

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-[1440px] h-[4835px]  bg-white border-2">
      <Header />
      <div className="w-[1440px] h-[812.53px] border-2">
        <div className="bg-[url('/bit.jpg')] bg-cover bg-center  w-[1440px] h-[1007.93px]  border-2 ">
          <div className="w-[1440px] h-[716.83px] border-2  ">
            <div className="w-[643px] h-[443px] mt-[20%] ml-[739px] rounded-[10px] bg-[#FFF3E3] border-2">
              <h2 className="w-[123px] h-[24px] mt-[10%] ml-[15%] text-[#333333] ">New Arrival</h2>
              <h2 className="w-[400px] h-[127px] ml-[15%] text-[52px] font-bold text-[#B88E2F]">Discover Our New Collection</h2>
              <p className="text-[#333333] font-medium text-lg w-[500px] h-[52px] mt-[10%] ml-[15%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              <button className="text-[#FFFFFF] bg-[#B88E2F] w-[222px] h-[74px] mt-[2%] ml-[15%] pt-[25px] pr-[72px] pb-[25px] pl-[72px]">BUY Now</button>
            </div>
            <h2 className="w-[300px] h-[48px] mt-[20%] ml-[40%] font-bold text-[#333333] text-[32px]">Browse The Range</h2>
            <p className="text-[#666666] font-normal w-[559px] h-[28.71px]  ml-[36%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            <div className="flex justify-evenly">
            <div className="mt-[2%]">
              <img src="/mg1.png" alt="dining" width={381} height={480} className="w-[381px] h-[480px] " /><h2 className="ml-[30%] mt-[1%] text-[#333333] text-2xl font-semibold">Dining</h2> 
            </div>
            <div className="mt-[2%]">
              <img src="/mg2.png" alt="living" className="w-[381px] h-[480px] " /><h2 className="ml-[30%] mt-[1%] text-[#333333] text-2xl font-semibold">Living</h2> 
            </div>
            <div className="mt-[2%]">
              <img src="/mg3.png" alt="bed room" className="w-[381px] h-[480px] " /><h2 className="ml-[30%] mt-[1%] text-[#333333] text-2xl font-semibold">Bed Room</h2> 
            </div>
            </div>
                  <div className="h-[1084px] mt-[1%] ml-[5%] ">
                   
                    <h2 className="w-[269px] h-[48px] text-[#3A3A3A] font-bold text-[40px] mt-[1%] ml-[40%]">Our Products</h2>
                    <div className="w-[1236px] h-[446px]  mt-[1%] ml-[4%] flex justify-evenly">
                      <img src="/syl.png" alt="syltherine" className="w-[284px] h-[446px]" />
                      <img src="/op2.png" alt="click" className="w-[284px] h-[446px]" />
                      <img src="/lolito.png" alt="lolito" className="w-[284px] h-[446px]" />
                      <img src="/repira.png" alt="repira" className="w-[284px] h-[446px]" />
                    </div>
                    <div className="w-[1236px] h-[446px]  mt-[1%] ml-[4%] flex justify-evenly">
                      <img src="/grifo.png" alt="syltherine" className="w-[284px] h-[446px]" />
                      <img src="/muggo.png" alt="click" className="w-[284px] h-[446px]" />
                      <img src="/pingky.png" alt="lolito" className="w-[284px] h-[446px]" />
                      <img src="/potty.png" alt="repira" className="w-[284px] h-[446px]" />
                    </div>
                    <button className="bg-[#FFFFFF] w-[245px] h-[45px] mt-[2%] ml-[40%] text-[#B88E2F] font-semibold text-base border-[1px] border-[#B88E2F] ">Show More</button>
                    <div className="flex bg-[#FCF8F3] mt-[5%] w-[1440px] h-[670px]">
                      <div className="ml-[5%]">
                      <h2 className="w-[422px] h-[96px] text-[40px] font-bold text-[#3A3A3A] mt-[45%]">50+ Beautiful rooms inspiration</h2>
                      <p className="w-[368px] h-[48px]  mt-[5%] text-[#616161] text-base font-medium">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                      <button className="w-[176px] h-[48px] mt-[10%] bg-[#B88E2F] text-[#FFFFFF]  font-semibold text-base">Explore More</button>
                      </div>
                      <div className="flex  ">
                          <div className="flex mt-[2%]">
                            <img src="/r1.png" alt="room1" className="w-[421px] ml-[7%] h-[582px] mt-[2%] mb-[1%]" />
                             <img src="/Content.png" alt="content" className="w-[217px] h-[130px] mt-[87%] ml-[-75%]" /> 
                             <img src="/rect.png" alt="rectangle" className="w-[48px] h-[48px] mt-[103%]" /> 
                             <img src="/arrow.png" alt="arrow" className="w-[24px] h-[24px] mt-[105%] ml-[-7%]"/> 
                          </div>
                          <div className="flex mt-[2%]  gap-8">
                            <img src="/r2.png" alt="room2" className="w-[372px] h-[486px] mt-[2%]" />
                            <img src="/r3.png" alt="room3" className="w-[200px] h-[486px] mt-[2%]" />
                          </div>
                        
                      </div>
                      
                    </div>
                        <div className="w-[1650px] h-[1000px] ml-[-196px] mt-[7%] border-2 ">
                          <p className="w-[222px] h-[30px] font-semibold text-xl text-[#616161] ml-[50%]">Share your setup with</p>
                          <h2 className="w-[356px] h-[48px] font-bold text-5xl text-[#3A3A3A] ml-[45%]">#FuniroFurniture</h2>
                            <div>
                              <div className="flex">
                                  <div className="ml-[8%]">
                                  <img src="/ff1.png" alt="furniture1"  className="w-[100px] h-[500px] "/>
                                  <img src="/ff2.png" alt="furniture2"className="w-[230px] h-[332px]  mt-[10%]" />
                                  </div>
                                  <div className="flex">
                                    <div>
                                   <img src="/ff3.png" alt="furniture3" className="w-[520px] h-[312px] mt-[45%] ml-[-16%]"/>
                                  <img src="/ff4.png" alt="furniture4"className="w-[325px] h-[242px] mt-[5%] ml-[5%]" />
                                  </div>
                                  <div>
                                  <img src="/ff5.png" alt="furniture5" className="w-[350px] h-[392px] mt-[90%] ml-[-10%]"/></div>
                                  <div className="flex">
                                  <img src="/ff6.png" alt="furniture6" className="w-[178px] h-[242px] mt-[140%] ml-[-2%]"/>
                                  
                                  <img src="/ff7.png" alt="furniture7"className="w-[290px] h-[348px] ml-[-48%] mt-[35%]" /></div>
                                 <div>
                                  <img src="/ff8.png" alt="furniture8" className="w-[258px] h-[196px] mt-[155%] ml-[-50%]"/>
                                   <img src="/ff9.png" alt="furniture9"className="w-[425px] h-[433px] mt-[-204%] ml-[-13%]" /></div>
                                  </div>
                              </div>

                            </div>
                        </div>
                        
                  </div>
          </div>
          <Footer />
        </div>
      
      </div>
      
    
    </div>
  );
}
