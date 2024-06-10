import React from "react";
import Heading from "../Typography/Heading";
 // Make sure to import the CSS file

const Blog = () => {
  return (
    <div className="px-20  mt-20 ">
      <div className="flex flex-col items-center justify-center gap-4">
        <Heading>Read Our Blog</Heading>
        <h1 className="text-[#2D2A6E] text-3xl font-semibold">
          Our Latest Post
        </h1>
        <p className="text-[#2D2A6E] text-sm font-medium">
          The liber tempor cum soluta nobis eleifend option congue doming quod
          mazim.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 mt-10">
        {Data.map((item) => {
          return (
            <div className="card w-[280px] bg-white" key={item.id}>
              <img src={item.img} alt="" className="card-image rounded-xl" />
              <div className="px-4 pt-2 flex flex-col gap-2">
                <p className="text-[#5D557C] text-xs">{item.date}</p>
                <h1 className="text-[#2D2A6E] text-lg font-semibold">
                  {item.heading}
                </h1>
                <p className="text-[#2D2A6E] text-md font-medium">
                  {item.desc}
                </p>
                <button className="text-[#96AE00] font-semibold pt-2 mb-7 text-left text-md ">{item.link}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

const Data = [
  {
    id: 1,
    img: "/blog-bg-1.webp",
    date: "20 May 2022",
    heading: "The 10 Best Places to Visit in 2022",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolor. Aliquam similique unde fugiat!",
    link: "Continue Reading",
  },
  {
    id: 2,
    img: "/blog-bg-2.webp",
    date: "20 May 2022",
    heading: "The 10 Best Places to Visit in 2022",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolor. Aliquam similique unde fugiat!",
    link: "Continue Reading",
  },
  {
    id: 3,
    img: "/blog-bg-3.webp",
    date: "20 May 2022",
    heading: "The 10 Best Places to Visit in 2022",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolor. Aliquam similique unde fugiat!",
    link: "Continue Reading",
  },
  {
    id: 4,
    img: "/blog-bg-4.webp",
    date: "20 May 2022",
    heading: "The 10 Best Places to Visit in 2022",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolor. Aliquam similique unde fugiat!",
    link: "Continue Reading",
  },
];
