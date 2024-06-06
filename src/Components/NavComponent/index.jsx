"use client";
import React, { useState } from "react";
import AnchorTag from "../Typography/AnchorTag";
import { Menu,X,Search,User } from "lucide-react";
const NavComponent = () => {
  const [navAtive, setNavActive] = useState(false);
  return (
    <div>
      <div className="hidden md:flex gap-5 lg:gap-7">
        {navItems.map((item, id) => (
          <AnchorTag key={id} href={item.link}>
            {item.name}
          </AnchorTag>
        ))}
      </div>

      <div
        className=" left-0  flex md:hidden cursor-pointer"
        onClick={() => setNavActive(!navAtive)}
      >
        {!navAtive ? (
          <Menu iconName={"mi:menu"} className={"!w-9 !h-9"} />
        ) : (
          <X

            className={"!w-7 !h-7 !z-[999] text-white"}
          />
        )}
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-72 bg-[#2D2A6E] transition-transform duration-700 z-[100]  ${
          navAtive ? " translate-x-0" : " -translate-x-full"
        } `}
      >
        
          <div className='bg-[#94AC00] h-16 p-2   ' >
            <h2 className='text-white font-semibold text-[20px] pt-3 ml-12 '>
              Close 
            </h2>
            
          </div>
          <div className='px-4 pt-4'>
            <h2 className='text-white text-center font-sans font-medium'>What are you looking for?</h2>
            <div className='relative mt-4'>
              <input
                type="text"
                placeholder='Search Products...'
                className='w-full px-3 py-2  rounded'
              />
              <Search className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
            </div>
          </div>
    
        <div className="flex flex-col ml-6  gap-6 pt-4">
          {navItems.map((item, id) => (
            <AnchorTag
              key={id}
              href={item.link}
              className={"!text-xl text-white"}
              onClick={() => {
                setNavActive(!navAtive);
              }}
            >
              {item.name}
            </AnchorTag>
          ))}
        </div>
        <div className="flex text-white pt-6 ml-4 gap-2">
          <div>
            <User />
          </div>
          <div className="text-md font-medium ">
            <h2>Login / <span>Register</span> </h2> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;

const navItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "#about" },
  { name: "Blog", link: "#pricing" },
  { name: "Pages", link: "#faqs" },
  { name: "About us", link: "#contact" },
];
