// "use client";
// import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Card from "./Card.jsx";
import content from "../utilities/data.js";
import Image from "next/image";
import HeroImage from "../../public/images/HeroSectionImage.png";
import SearchComponent from "@/components/SearchComponent.jsx";

export default function Page({ data }) {
  // console.log(data)



  return (
    <div className="flex flex-col justify-center items-center ">
    <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center lg:pt-3 pb-2">
      <div className="py-3 lg:py-0 self-center w-[19rem] h-[19rem]">
        <Image src={HeroImage} alt="hero_image" />
      </div>
      
      <div className="mx-auto text-4xl lg:text-5xl leading-tight lg:leading-tight text-center lg:text-left lg:ml-10 lg:mr-20 mt-5 lg:mt-0">
        <h1 className="text-amber-600">
          Enlighten <br /> yourSelf with <br /> Paawan Gyan
        </h1>
      </div>
    </div>
  
    {/* <input
     onChange={handleSearch}
      type="text"
      placeholder="Search...All"
      className="px-4 py-2 w-4/5 mx-auto border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-700 border-blue-600 mt-3 text-white"
    /> */}

    <SearchComponent/>
  
    <div className="cards flex flex-wrap gap-8 justify-center items-center">
      {content?.map((item, i) => {
        return (
          <Card
            key={i}
            redirect={item?.id}
            title={item?.title}
            textColor="text-orange-500"
            description={item?.description}
            imageUrl={item?.image}
           
          />
        );
      })}
    </div>
  </div>
  
  
  );
}
