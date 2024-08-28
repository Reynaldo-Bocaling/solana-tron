import React from "react";
import { socials } from "../constant";

const Socials = ({ based }) => {
  const filterData = () => {
    return based == "Tron" ? socials.tron : socials.solana;
  };
  const data = filterData();

  return (
    <div className="relative flex flex-col items-center justify-center z-[99]">
      <p className=" text-white text-lg md:text-2xl tracking-wider font-semibold  bg-[rgba(58,57,57,0.7)] py-3 px-9 rounded-full z-[99]">
        {based}
      </p>
      <div className="relative flex items-center justify-center gap-5 mt-4 z-50 mb-2">
        {data.map((item, index) => (
          <a key={index} href={item.url} className="cursor-pointer z-50">
            <img src={item.img} className="w-14 h-14 " alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
