import React from "react";
import Heading from "../Typography/Heading";
import Button from "../Buttons";
const HeroSection = () => {
  return (
    <div className=" md:relative px-4  md:px-20 pt-20">
      <div className="md:flex block ">
        <div className=" w-full md:w-[50%] mt-7">
          <Heading className={`!text-[20px] font-semibold `}>
            Top Seller in the Week
          </Heading>
          <h1 className="text-[#2D2A6E] text-4xl md:text-7xl font-medium mt-5 md:tracking-wide   ">
            Choose Your Healty LifeStyle.
          </h1>
          <p className="text-[#2D2A6E] text-[17px] mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet omnis
            laudantium inventore est iste a.
          </p>
          <Button className={"!mt-7"}>Shop Now</Button>
        </div>
        <div className=" w-full md:mt-0 mt-14 md:w-[50%]">
          <img src="/slider-bg-1.webp" alt="" />
          <div className="hidden md:block">
            <img
              src="/hero-img.webp"
              alt=""
              className="absolute top-[10%] left-[50%]"
            />
            <img
              src="/hero-img.webp"
              alt=""
              className="absolute top-[35%] rotate-6 left-[45%]"
            />
            <img src="/tree-leaf-7.webp" alt="" className="absolute" />
            <img
              src="/tree-leaf-7.webp"
              alt=""
              className="absolute left-[70%] top-[70%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
