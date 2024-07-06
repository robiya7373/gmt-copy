import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-[1440px] mx-auto px-5 relative">
      <div className=" flex justify-between items-center py-5">
        <div>
          <ul className=" flex gap-6 text-[rgb(122,118,135)] font-manrope text-xs font-medium leading-4 tracking-normal text-left">
            <NavLink  to={"/okompaniya"}>
              О компании
            </NavLink>
            <NavLink to={"/dostafka"}>
              Доставка
            </NavLink>
            <NavLink to={"/oplata"}>
             Оплата
            </NavLink>
            <NavLink to={"/garantiya"}>
              Гарантии
            </NavLink>
            <NavLink to={"/blog"}>
              Блог
            </NavLink>
          </ul>
        </div>
        <div>
          <ul className=" flex gap-7 text-[rgb(122,118,135)] font-manrope text-xs font-medium leading-4 tracking-normal text-left">
            <li>
              <a href="#">info@mail.ru</a>
            </li>
            <li>
              <a href="#">г. Москва, ул. Московская, д. 35</a>
            </li>
          </ul>
        </div>
      </div>
         </nav>
  );
};

export default Navbar;
