import React from "react";
import AksiyaLeft from "./AksiyaLeft";
import Kabinet from "../../components/MainSection/Kabinet/Kabinet";
import TovarList from "../../components/Detals/TovarList";
import NextPrev from "../../components/Detals/NextPrev";
import Brend from "../../components/MainSection/Brend/Brend";
import Map from "../../components/Footer/Maps/Maps";
import Gmail from "../../components/Footer/Gmail/Gmail";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Aksiya = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-5 flex pt-[20px] gap-2 custom-text mb-[40px]">
        <NavLink to="/">
          <span className="text-[#7A7687] cursor-pointer flex items-center gap-2">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </NavLink>
        <NavLink>
          <span className="text-[#202020] font-medium cursor-pointer flex items-center gap-2">
            Акции
          </span>
        </NavLink>
      </div>
      <AksiyaLeft />
      <Kabinet />
      <div className="flex justify-between mt-8 max-w-[1440px] mx-auto px-5">
        {" "}
        <h1 className="font-semibold text-3xl opacity-70 mt-7">
          Ранее смотрели
        </h1>
        <div className="">
          <TovarList />
          <div className="flex justify-between w-[940px] mt-[40px] mb-56 mr-[12px]">
            <NextPrev />
            <button className="transition duration-300 flex justify-center items-center px-6 py-[11px] rounded-full font-semibold text-[16px] text-[#fff] bg-[#088269]  border border-[#D5D1E1]">
              Все товары
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-5 ">
        <Brend />{" "}
      </div>
      <Map />
      <Gmail />
    </div>
  );
};

export default Aksiya;
