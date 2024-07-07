import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Katalog = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-5 relative" >
      <div className=" flex justify-between">
        <ul className="text-[--second] flex items-center gap-[15px] lg:gap-[25px] ">
          <NavLink to={"/Katalog"} className="flex items-center gap-1 text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            <RiMenu2Fill />
            <span>Каталог</span>
          </NavLink>

          <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            Производители
          </li>
          <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            Кабинеты под ключ
          </li>

          <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            Услуги
          </li>

          <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            Акции
          </li>
          <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            Покупателям
          </li>
          <NavLink to={"/kontakt"} className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            Контакты
          </NavLink>
        </ul>

        <div className="flex gap-[17px] items-center ">
          <span className="flex items-center gap-1 text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            <span>Москва</span>
            <CiLocationOn />
          </span>

          <div className="bg-[--pri] rounded-full text-white p-2 xl:hidden ">
            <FiPhone />
          </div>
          <div className=" gap-[10px] hidden xl:flex ">
            <button className="text-[12px]   py-2 lg:py-[11px] px-[20px] lg:px-[30px] border border-[--border] text-[--second] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
              +7(495)000-00-00
            </button>
            <button className="border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katalog;
