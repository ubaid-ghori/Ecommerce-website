import React from "react";
import Heading from "../Typography/Heading";
import Reminder from "./Reminder";
const Timer = () => {
  return (
    <div className="bg-[#65A648]  mt-10 relative ">
      <div className="md:block hidden">
      <img src="/tree-leaf-7.webp" alt="" className="absolute top-[60%] left-[30%]" />
      <img src="/tree-leaf-7.webp" alt="" className="absolute top-[20%] left-[84%]" />

      </div>
      <div className="pt-10 md:px-20 px-4 md:flex block ">
        <div className=" w-full md:w-[40%] mt-24 flex flex-col gap-5">
          <Heading className={"!text-white"}>Deals Of The Day </Heading>
          <h1 className="text-white text-5xl font-semibold ">
            Premium Drinks Fresh Farm Product
          </h1>
          <p className="text-white">
            The liber tempor cum soluta nobis eleifend option congue doming quod
            mazim placerat facere possum assam going through.
          </p>
          <Reminder />
        </div>
        <div className=" w-full md:w-[60%]">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREB5EN3Z1vPCsLp_jS_AR_wWUK0Vmien2VtkMZadYi64617ExM" alt="" className=" w-3/4 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Timer;
