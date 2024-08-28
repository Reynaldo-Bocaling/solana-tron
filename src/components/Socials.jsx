import React from "react";
import { socials } from "../constant";

const Socials = ({ based }) => {
  const filterData = () => {
    return based == "Tron" ? socials.tron : socials.solana;
  };
  const data = filterData();

  return (
    <div className="relative flex flex-col items-center justify-center z-[99]">
      <div className="relative flex items-center justify-center gap-5 mt-4 z-50">
        {data.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="cursor-pointer z-50 mb-2 hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <img src={item.img} className="w-16 h-16 " alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
