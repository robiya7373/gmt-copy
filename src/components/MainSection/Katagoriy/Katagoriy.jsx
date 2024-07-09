import React from "react";
import categories from "../../../utils/katagoriyData";

const Katagoriy = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-5 relative">
      <div className="flex justify-between items-center mb-[45px]">
        <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[--second]">
          Популярные категории
        </p>
        <div className="hidden md:block">
          <button className="border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
            Все категории
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-[10px] mb-[25px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex-none border-[#D5D1E1] border  rounded-[10px] overflow-hidden ${
              category.span > 1
                ? "w-full md:w-[calc(100%-10px)] lg:w-[calc(50%-5px)] h-[304px]"
                : "w-[calc(50%-5px)] md:w-[calc(33.333%-6.666px)] lg:w-[calc(25%-7.5px)] h-[154px] sm:h-[216px] lg:h-[304px]"
            }`}
          >
            <div className="p-[20px] bg-white h-[109px] sm:h-[148px] lg:h-[220px]">
              <img src={category.imgSrc} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t">
              <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]">
                {category.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Katagoriy;
