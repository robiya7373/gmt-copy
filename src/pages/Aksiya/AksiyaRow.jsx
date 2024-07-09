import React, { useState } from "react";
import tovarData from "../../utils/tovarData";
import { BiObjectsVerticalBottom } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const ProductGrid = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTovar = tovarData.filter((tovar) => tovar.label);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTovar.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredTovar.length / itemsPerPage);

  return (
    <div className="max-w-[1440px] mx-auto px-5">
      <div className=" max-w-[1000px] mx-auto mt-10 ">
        <div className=" grid grid-cols-3 gap-8">
          {currentItems.map((tovar, index) => (
            <div key={index} className="border rounded-xl w-[315px] relative">
              {tovar.label && (
                <span
                  className={`absolute top-4 left-4 px-2 py-1 rounded-full text-white text-xs ${tovar.labelClass}`}
                >
                  {tovar.label}
                </span>
              )}
              <BsHeart className="absolute top-4 right-4 cursor-pointer" />
              <BiObjectsVerticalBottom className="absolute top-4 right-10 cursor-pointer" />
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
      <div className="flex justify-center mt-10 mb-28">
        <button
          className="px-3 py-1 mx-1 border rounded"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <LuChevronLeft />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 mx-1 border rounded-md ${
              currentPage === index + 1
                ? "bg-[#088269] text-white rounded-md "
                : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 mx-1 border rounded"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
