"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import NavComponent from "../NavComponent";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" border-b-2 shadow-sm w-full bg-[#FFFFFF]">
      <div className="px-4 md:px-20 flex justify-between items-center p-2 ">
        <div className="hidden md:block ">
          <Image src="/logo.webp" width={150} height={100}></Image>
        </div>
        <div>
          <NavComponent />
        </div>
        <div className="block md:hidden ">
          <Image src="/logo.webp" width={150} height={100}></Image>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          <div className="hidden md:block">
            <Search
              className="text-[#535B79] bg-[#DDDDDD] rounded-full p-2 "
              size={34}
            />
          </div>
          <div className="hidden md:block">
            <User
              className="text-[#535B79] bg-[#FEEFD0] rounded-full p-2"
              size={34}
            />
          </div>
          <div className="hidden md:block">
           <Link href='/Wishlists'>
           <Heart
              className="text-[#535B79] bg-[#2daedd43] rounded-full p-2"
              size={34}
            />
           </Link>
          </div>
          <div>
            <ShoppingCart
              className="text-[#535B79] bg-[#FEEFD0] rounded-full p-2"
              size={34}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
