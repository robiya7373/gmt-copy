import React, { useState } from "react";
import { HiChevronDown, HiBars3, HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsHeart } from "react-icons/bs";
import { BiObjectsVerticalBottom } from "react-icons/bi";

import tovar from "../../utils/tovarData";

const Favorite = () => {
  const [startIndex, setStartIndex] = useState(5);

  const displayedTovar = tovar.slice(startIndex, startIndex + 6);
  if (displayedTovar.length < 3) {
    displayedTovar.push(...tovar.slice(0, 3 - displayedTovar.length));
  }
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 my-[60px]">
        <h1 className="text-4xl mb-3  font-medium">Избранное</h1>
        <div className="flex justify-between">
          <ul>
            <li>Все товары (3)</li>
            <li className="my-3">Маммографы</li>
            <li>Флюорографы</li>
          </ul>
          <div className="flex gap-[780px] border border-[#E5E2EE] rounded px-3 h-8">
            <p className="flex m-[2px]">
              По популярности <HiChevronDown className="m-[7px]" />
            </p>
            <div className="flex mt-[5px]">
              <HiBars3 className="w-5 h-5" />
              <HiOutlineSquares2X2 className="text-[#088269] w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto mr-[10px] mt-3">
          <div className="grid grid-cols-3 gap-10">
            {displayedTovar.map((tovar, index) => (
              <div key={index} className="border rounded-xl w-[315px] relative">
                {tovar.label && (
                  <span className={`absolute top-4 left-4 px-2 py-1 rounded-full text-white text-xs ${tovar.labelClass}`}>
                    {tovar.label}
                  </span>
                )}
                <BsHeart className="absolute top-4 right-4 cursor-pointer" />
                <BiObjectsVerticalBottom  className="absolute top-4 right-10 cursor-pointer"/>
                <img
                  src={tovar.image}
                  alt={tovar.alt}
                  className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10"
                />
                <div className="p-4">
                  <h3 className="pr-[80px] text-[18px] font-semibold mb-2 text-[#202020]">
                    {tovar.title}
                  </h3>
                  <div className="py-4">
                    <span className="block text-[#7A7687] text-[14px] font-normal">
                      {tovar.desc}
                    </span>
                    <p className="text-[16px] font-normal text-[#7A7687]">
                      {tovar.position}
                    </p>
                  </div>
                  <p className="text-[16px] font-medium text-[#202020]">
                    {tovar.price}
                  </p>
                </div>
                <div className="p-4">
                  <button className="w-[100%] transition duration-300 flex justify-center items-center px-4 py-[8px] rounded-full font-semibold text-[16px] text-[#088269] border border-[#D5D1E1]">
                    Добавить в корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-center mt-[40px]">
          <button className="px-6 py-[11px] rounded-full font-semibold text-[16px] text-white bg-[#088269] border-none">
            Все товары
          </button>
        </div>
      </div>
    </>
  );
};

export default Favorite;
