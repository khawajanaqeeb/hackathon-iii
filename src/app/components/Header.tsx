import React from "react";


export default function Header(){
    return(
        <div className="w-[1440px] h-[100px] bg-[##FFFFFF]">
            <div className="w-[1286px] h-[41px] mt-[29px] ml-[54px] flex">
                <div className="w-[185px] h-[41} flex">
                    <img src="/mh.png" className="w-[50px] h-[41px]"/>
                    <h2 className="w-[130px] h-[41px] text-[34px] font-bold text-[#000000]  ">Furniro</h2>
                </div>
                    <ul className="flex w-[430px] h-[41px] mt-[29px] ml-[400px] text-black justify-evenly">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    
                        <img src="/man.png" className="w-[28px] h-[28px] mt-[29px] ml-[10px]"/>
                        <img src="/search.png" className="w-[28px] h-[28px] mt-[29px] ml-[10px]"/>
                        <img src="/heart.png" className="w-[28px] h-[28px] mt-[29px] ml-[10px]"/>
                        <img src="/cart.png" className="w-[28px] h-[28px] mt-[29px] ml-[10px]"/>
            </div>

        </div>
        

        
    )
}