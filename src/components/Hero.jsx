import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="w-11/12 xl:w-4/5 h-[350px] m-auto bg-stone-200 rounded-xl">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-11/12 xl:w-1/2 p-5 space-y-5">
          <h1 className="text-5xl font-semibold">find the perfect gift for everyone on your list.</h1>
          <div className="bg-white flex items-center space-x-2 px-5 py-2 rounded-full">
            <AiOutlineSearch size={"1.2rem"}/>
            <input className="outline-0 w-full" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="hidden md:flex p-5">
          <img className="w-[400px] h-[300px] border-8 border-gray-500" src="images/cout.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
