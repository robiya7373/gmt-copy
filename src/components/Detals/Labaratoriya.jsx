import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Filter from "./Filter";

const Labaratoriya = () => {
  return (
    <>
      {" "}
      <div className="max-w-[1440px] mx-auto px-5 flex pt-[20px] gap-2 custom-text mb-[60px]">
        <NavLink to="/">
          <span className="text-[#7A7687] cursor-pointer flex items-center gap-2">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </NavLink>
        <NavLink to="/katalog">
          <span className="text-[#7A7687] cursor-pointer flex items-center gap-2">
          Каталог <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </NavLink>
        <NavLink>
          <span className="text-[#202020] font-medium cursor-pointer flex items-center gap-2">
          Лабораторное оборудование
          </span>
        </NavLink>
      </div>
      <div className="max-w-[1440px] mx-auto px-5 mb-[60px]">
        <button className=" bg-[#FFFFFF] font-semibold border border-[#D5D1E1] rounded-full hover:text-[#088269] hover:bg-transparent px-5 py-2 mr-2">Дерматологическое оборудование</button>
        <button className=" bg-[#FFFFFF] font-semibold border border-[#D5D1E1] rounded-full hover:text-[#088269] hover:bg-transparent px-5 py-2 mr-2">Ветеринарное оборудование</button>
        <button className=" bg-[#FFFFFF] font-semibold border border-[#D5D1E1] rounded-full hover:text-[#088269] hover:bg-transparent px-5 py-2 mr-2">Мебель медицинская</button>
        <button className=" bg-[#FFFFFF] font-semibold border border-[#D5D1E1] rounded-full hover:text-[#088269] hover:bg-transparent px-5 py-2 mr-2">Ветеринарное оборудование</button>
        <button className=" bg-[#FFFFFF] font-semibold border border-[#D5D1E1] rounded-full hover:text-[#088269] hover:bg-transparent px-5 py-2 mr-2">Показать больше</button>
      </div>
      <Filter/>
    </>
  );
};

export default Labaratoriya;
