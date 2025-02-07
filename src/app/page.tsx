
import React from "react";


// import OurProducts from "./components/ProductList";
import ProductList from "./components/ProductList";
import HeroSection from "./components/HeroSection";
import ProductRange from "./components/ProductRange";
import InspirationSection from "./components/InspirationSection";
import ShareYoursetup from "./components/ShareYoursetup";


export default function Home() {
  return (
    <div className="bg-white ">
     <HeroSection/>
      <ProductRange/>

      {/* Our Products */}
      <ProductList/>
        
      <InspirationSection/>

      <ShareYoursetup/>

      
    </div>
  );
}