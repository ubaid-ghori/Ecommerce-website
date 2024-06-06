import React from "react";
import Heading from "../Typography/Heading";
import Data from "../../Components/bfy-data";
import Button from "../Buttons";
const Bestforyou = () => {
  return (
    <div className="md:px-20 px-4 mt-20">
      <div className="md:flex block  gap-7 ">
        <div className="mt-7 relative hidden md:block">
          <img src="/feature-thumb-1.webp" alt="" />
          <div>
            <img src="/tree-leaf-7.webp" alt="" className="absolute top-16 " />
            <img src="/hero-img.webp" alt="" className="absolute top-10 left-80 " />

          </div>
        </div>
        <div className="relative">
          <img src="/tree-leaf-7.webp" alt="" className=" absolute left-96 rotate-90 hidden md:block" />
          <Heading>The Best For You</Heading>
          <h2 className=" md:text-5xl text-4xl text-[#2D2A6E] font-semibold mt-4">
            Organic Drinks
          </h2>
          <h2 className="text-4xl md:text-2xl  text-[#96AE00] font-semibold mt-3">
            Easy Healty
            <b className="text-[#2D2A6E] font-semibold mr-3 ml-3">-</b>
            <span className="text-[#2D2A6E] ">Happy Life</span>
          </h2>
          <p className="text-[#4D5574] font-normal mt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sit
            delectus recusandae cum assumenda accusamus!
          </p>
         <Data />
         <Button className={'mt-4 mx-5'}>View more</Button>
        </div>
      </div>
    </div>
  );
};

export default Bestforyou;
