import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import Gmt from "../../../../public/assets/gmt.png";
import { PiAlignBottomLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import Register from "./Register";
import { useSelector } from "react-redux";
import { SelectWishList } from "../../../redux/WishlistSlice";
import { SelectCtravleniya } from "../../../redux/Ctravleniya";
const categories = [
  "Реанимация",
  "Хирургия",
  "Офтальмология",
  "Лабораторная диагностика",
  "Акушерство",
  "Гинекология",
  "Гистология",
  "Косметология",
  "Оториноларингология",
  "Рентгенология и томография",
  "Гинекология",
  "Стерилизация",
  "Физиотерапия и реабилитация",
  "Функциональная диагностика",
  "Эндоскопия",
  "Новинки",
  "Распродажи",
  "Кабинеты под ключ",
];
const Seorch = () => {
  const [showCategories, setShowCategories] = useState(false);
  const cart = useSelector((state) => state.cart.data);

  // const SravList = useSelector(SelectCtravleniya);
  const SravList = useSelector(SelectCtravleniya);
  // const CardList = useSelector(tempCart);
  const WishList = useSelector(SelectWishList);

  return (
    <div className="max-w-[1440px] w-full mx-auto px-5">
      <div className="py-[20px]  flex justify-between gap-4 ">
        <div className="flex gap-[30px] w-full md:gap-[50px]">
          <NavLink to={"/"}>
            <img src={Gmt} alt="" />
          </NavLink>
          <div className="relative flex items-center border border-[#D5D1E1] px-2 rounded-full">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-2 text-[14px] text-[#7A7687] rounded-full bg-[#D5D1E1] p-3 relative right-[8px]"
            >
              Все категории
              <FaCaretDown className="text-[#7A7687] text-[14px] font-semibold leading-normal" />
            </button>
          <NavLink to={"/Katalog"}>
          {showCategories && (
              <div className="absolute top-10 left-0 w-[250px] bg-white shadow-md rounded-lg z-10">
                <ul className="py-2">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </NavLink>
            <input
              type="search"
              placeholder="Поиск"
              className="bg-[#F8F7F3] px-4 w-[400px] outline-none "
            />
            <button className=" py-4 px-4 flex items-center text-[15px] text-[#7A7687] rounded-r-full rounded-l-full  bg-[#D5D1E1]  left-2 relative">
              <RiSearchLine className="text-[#7A7687] items-center" />
            </button>
          </div>
          <div className="hidden xl:block">
            <p className="text-[#8a8694] text-[14px] font-medium">
              Пн-Пт с 09:00-19:00
            </p>
            <p className="text-[#8a8694] text-[14px] font-medium">
              {" "}
              Сб-Вс - выходной
            </p>
          </div>
        </div>
        <div className="hidden sm:flex gap-3 lg:gap-6 items-center">
          <Register />
          <NavLink
            to={"/favorite"}
            className="flex flex-col gap-1 items-center"
          >
            <BsHeart className=" w-5 h-6" />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Избранное
            </p>
            {WishList.length > 0 && (
              <div className=" top-[70px] ml-9 absolute  w-[15px] h-[15px] rounded-full text-[#fff] font-semibold text-[12px] flex justify-center items-center bg-[#088269] ">
                {WishList.length}
              </div>
            )}
          </NavLink>{" "}
          <NavLink
            to={"/ctravleniya"}
            className="flex flex-col gap-1 items-center"
          >
            <PiAlignBottomLight className=" w-6 h-6" />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Сравнить
            </p>
            {SravList.length > 0 && (
              <div className=" top-[70px] ml-9 absolute  w-[15px] h-[15px] rounded-full text-[#fff] font-semibold text-[12px] flex justify-center items-center bg-[#088269] ">
                {SravList.length}
              </div>
            )}
          </NavLink>{" "}
          <NavLink
            to={"/korzinka"}
            className="flex flex-col gap-1 items-center"
          >
            <PiShoppingCartSimpleLight className=" w-6 h-6" />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Корзина
            </p>
            {cart.length > 0 && (
              <div className=" top-[70px] ml-9 absolute  w-[15px] h-[15px] rounded-full text-[#fff] font-semibold text-[12px] flex justify-center items-center bg-[#088269] ">
                {cart.length}
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Seorch;
