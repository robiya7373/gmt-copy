import React from "react";
import AksiyaRow from "./AksiyaRow";

const Menu = () => {
  return (
    <div className="flex gap-28 max-w-[1440px] mx-auto px-5">
      <div className="w-72 h-80 border bg-transparent shadow-md rounded-lg p-6 mt-10">
        <div className="border-b pb-2 mb-2">
          <h3 className="text-lg font-semibold">Категории</h3>
        </div>
        <ul className="space-y-2">
          {["Группы товаров", "Мониторы", "Лампы", "Кресла", "Рентгены"].map(
            (item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 rounded-md transition duration-300 hover:bg-[#088269] hover:text-white"
              >
                <span>{item}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </li>
            )
          )}
        </ul>
      </div>
      <AksiyaRow />
    </div>
  );
};

export default Menu;
