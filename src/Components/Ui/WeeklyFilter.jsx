"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import Button from "../Buttons";
import Heading from "../Typography/Heading";

const WeeklyFilter = () => {
  const [items, setItems] = useState(weeklyFoods); // Corrected state initialization

  const FilterItem = (category) => {
    const updatedItems = weeklyFoods.filter((item) => item.name === category);
    setItems(updatedItems);
  };

  return (
    <div className="px-20 mt-20">
      <div className="flex flex-col justify-center items-center gap-4 pt-10">
        <Heading>Special Products</Heading>
        <h2 className="text-[#2D2A6E] font-semibold text-4xl">
          Weekly Food Offers
        </h2>
        <p className="text-[#525578] font-semibold text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          dignissimos!
        </p>
        <div>
          <ul className="flex gap-10 cursor-pointer text-md font-semibold pt-4 ">
            <li className="text-[#BBB400]" onClick={() => setItems(weeklyFoods)}> {/* Fixed setItems to reset to all items */}
              All Products
            </li>
            <li
              className="text-[#5C5574] hover:text-[#BBB400]"
              onClick={() => FilterItem("Fruits")}
            >
              Fresh Fruits
            </li>
            <li
              className="text-[#5C5574] hover:text-[#BBB400]"
              onClick={() => FilterItem("Drinks")}
            >
              Fresh Drinks
            </li>
            <li
              className="text-[#5C5574] hover:text-[#BBB400]"
              onClick={() => FilterItem("Vegetables")}
            >
              Fresh Vegetables
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 px-4 pt-10 ">
        {items.map((item, index) => {  // Changed from weeklyFoods to items
          return (
            <div
              key={index}
              className="bg-[#eaeaec] rounded-2xl cursor-pointer transform transition-transform hover:-translate-y-3"
            >
              <div>
                <img src={item.img} alt="" className="rounded-t-2xl" />
                <div>
                  <Heart
                    className="absolute right-4 top-4 text-[#2D2A6E]"
                    size={25}
                  />
                </div>
              </div>
              <div className="p-4">
                <h1 className="text-[#2D2A6E] font-medium text-lg">
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
                <Button className="h-12 ml-8 mt-3 mb-2">{item.btn}</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyFilter;

const weeklyFoods = [
  {
    id: 1,
    img: "/product-img-1.webp",
    name: "Drinks",
    desc: "Fresh Drinks from the farm",
    price: "200",
    cutprice: "250",
    btn: "Add to Cart",
  },
  {
    id: 2,
    img: "/product-img-3.webp",
    name: "Fruits",
    desc: "Fresh Fruits from the farm",
    price: "200",
    cutprice: "250",
    btn: "Add to Cart",
  },
  {
    id: 3,
    img: "/product-img-4 (1).webp",
    name: "Vegetables",
    desc: "Vegetables  from the farm",
    price: "200",
    cutprice: "250",
    btn: "Add to Cart",
  },
  {
    id: 4,
    img: "/product-img-5.webp",
    name: "Fruits",
    desc: "Fresh Fruits from the farm",
    price: "200",
    cutprice: "250",
    btn: "Add to Cart",
  },
  {
    id: 5,
    img: "/product-img-13-thumb.webp",
    name: "Drinks",
    desc: "Fresh Drinks from the farm",
    price: "200",
    cutprice: "250",
    btn: "Add to Cart",
  },
  {
    id: 6,
    img: "/product-img-4 (1).webp",
    name: "Vegetables",
    desc: "Fresh Vegetable from the farm",
    price: "200",
    cutprice: "250",
    btn: "Add to Cart",
  },
  {
    id: 7,
    img: "/product-img-18.webp",
    name: "Fruits",
    desc: "Fresh Fruits from the farm",
    price: "200",
    cutprice: "250",
    btn: "Add to Cart",
  },
  {
    id: 8,
    img: "/product-img-1-thumb.webp",
    name: "Vegetables",
    desc: "Fresh Vegetables from the farm",
    price: "200",
    cutprice: "250",
    btn: "Add to Cart",
  },
];
