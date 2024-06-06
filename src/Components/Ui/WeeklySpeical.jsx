import React from "react";
import Heading from "../Typography/Heading";
import Button from "../Buttons";
import { Heart } from "lucide-react";
const WeeklySpeical = () => {
  return (
    <div className="md:px-20 px-4  mt-40 ">
      <div className="flex flex-col justify-center items-center gap-4 pt-20">
        <Heading>Special Products</Heading>
        <h2 className="text-[#2D2A6E] font-semibold text-4xl">
          Weekly Food Offers
        </h2>
        <p className="text-[#525578] font-semibold text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          dignissimos!
        </p>
      </div>
      <div className= "flex flex-wrap gap-8 pt-8 justify-center items-center">
        {Cards.map((item, index) => {
          return (
            <div 
              key={index} 
              className="bg-[#eaeaec] rounded-2xl cursor-pointer transform transition-transform hover:-translate-y-3">
             <div  >
             <img src={item.img} alt="" className="rounded-t-2xl" />
              <div>
                <Heart className="absolute right-4 top-4 text-[#2D2A6E]" size={25}  />
              </div>
             </div>
              <div className="p-4">
                <h1 className="text-[#2D2A6E] font-medium text-md">
                  {item.name}
                </h1>
                <p className="text-[#525578] font-semibold text-xs pt-2">
                  {item.desc}
                </p>
                <div className="flex px-3 gap-4 items-center pt-2">
                  <p className="text-[#2D2A6E] font-semibold text-xl">
                    {item.price}
                  </p>
                  <p className="text-[#525578] font-semibold text-md line-through">
                    {item.cutprice}
                  </p>
                </div>
                <Button className="h-12 ml-8 mt-3 mb-3">{item.btn}</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklySpeical;

const Cards = [
  {
    img: "/product-img-15.webp",
    name: "Fresh Bakery,Strawberry",
    desc: "Banana,Beautiful,Skin Good For...",
    price: "$15.00",
    cutprice: "$20.00",
    btn:'ADD to Cart'
  },
  {
    img: "/product-img-16-thumb.webp",
    name: "Fresh Bakery,Strawberry",
    desc: "Banana,Beautiful,Skin Good For...",
    price: "$15.00",
    cutprice: "$20.00",
    btn:'ADD to Cart'
  },
  {
    img: "/product-img-17-thumb.webp",
    name: "Fresh Bakery,Strawberry",
    desc: "Banana,Beautiful,Skin Good For...",
    price: "$15.00",
    cutprice: "$20.00",
    btn:'ADD to Cart'
  },
  {
    img: "/product-img-18-thumb.webp",
    name: "Fresh Bakery,Strawberry",
    desc: "Banana,Beautiful,Skin Good For...",
    price: "$15.00",
    cutprice: "$20.00",
    btn:'ADD to Cart'
  },
  {
    img: "/product-img-19.webp",
    name: "Fresh Bakery,Strawberry",
    desc: "Banana,Beautiful,Skin Good For...",
    price: "$15.00",
    cutprice: "$20.00",
    btn:'ADD to Cart'
  },
  {
    img: "/product-img-20.webp",
    name: "Fresh Bakery,Strawberry",
    desc: "Banana,Beautiful,Skin Good For...",
    price: "$15.00",
    cutprice: "$20.00",
    btn:'ADD to Cart'
  },
  {
    img: "/product-img-21.webp",
    name: "Fresh Bakery,Strawberry",
    desc: "Banana,Beautiful,Skin Good For...",
    price: "$15.00",
    cutprice: "$20.00",
    btn:'ADD to Cart'
  },
  {
    img: "/product-img-22-thumb.webp",
    name: "Fresh Bakery,Strawberry",
    desc: "Banana,Beautiful,Skin Good For...",
    price: "$15.00",
    cutprice: "$20.00",
    btn:'ADD to Cart'
  },
  {
    img: "/product-img-23-thumb.webp",
    name: "Fresh Bakery,Strawberry",
    desc: "Banana,Beautiful,Skin Good For...",
    price: "$15.00",
    cutprice: "$20.00",
    btn:'ADD to Cart'
  },
  {
    img: "/product-img-13-thumb.webp",
    name: "Fresh Bakery,Strawberry",
    desc: "Banana,Beautiful,Skin Good For...",
    price: "$15.00",
    cutprice: "$20.00",
    btn:'ADD to Cart'
  },
];
