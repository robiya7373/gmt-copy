import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: "Реанимация", link: "/labaratoriya" },
  { name: "Хирургия", link: "/labaratoriya" },
  { name: "Офтальмология", link: "/labaratoriya" },
  { name: "Лабораторная диагностика", link: "/labaratoriya" },
  { name: "Акушерство", link: "/labaratoriya" },
  { name: "Гинекология", link: "/labaratoriya" },
  { name: "Гистология", link: "/labaratoriya" },
  { name: "Косметология", link: "/labaratoriya" },
  { name: "Оториноларингология", link: "/labaratoriya" },
  { name: "Рентгенология и томография", link: "/labaratoriya" },
  { name: "Стерилизация", link: "/labaratoriya" },
  { name: "Физиотерапия и реабилитация", link: "/labaratoriya" },
  { name: "Функциональная диагностика", link: "/labaratoriya" },
  { name: "Новинки", link: "/labaratoriya" },
  { name: "Распродажи", link: "/labaratoriya" },
  { name: "Кабинеты под ключ", link: "/labaratoriya" },
];

const CategoryList = () => {
  return (
    <div className="hidden lg:block border border-[#D5D1E1] p-[15px] rounded-[10px] h-max w-[300px] mt-10">
      <p className="text-[16px] font-medium pb-[15px] mb-[20px] border-b">Направления</p>
      <ul className="rounded-[5px] flex flex-col gap-2 w-auto">
        {categories.map((category, index) => (
          <NavLink key={index} to={category.link}>
            <li className="flex justify-between items-center text-[14px] text-[#202020] hover:text-[#088269] duration-200 hover:underline hover:scale-105">
              {category.name}
              <IoIosArrowDown className="rotate-[-90deg] w-[17px] h-[17px]" />
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
