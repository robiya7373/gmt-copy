import React from "react";
import { BiObjectsVerticalBottom } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import tovar from "../../utils/tovarData";
import star from "../../../public/assets/Star.png";

const CtranisaTovarTop = () => {
  return (
    <div className="flex justify-between max-w-[1440px] mx-auto px-5">
      <div className="grid grid-cols-1 mt-20 mb-24 gap-4">
        {tovar.slice(0, 1).map((product, index) => (
          <div key={index} className="flex">
            <div className="relative">
              <img
                src={product.image}
                alt={product.alt}
                className="w-[760px] h-[540px] object-cover border shadow-sm rounded-lg"
              />
              <span
                className={`absolute top-3 left-4 px-3 py-2 rounded-full text-white text-xs ${product.labelClass}`}
              >
                {product.label}
              </span>

              <BsHeart className="absolute top-4 right-4 cursor-pointer" />
              <BiObjectsVerticalBottom className="absolute top-4 right-10 cursor-pointer" />
            </div>
            <div className="flex ml-44">
              <div className="mt-6">
                <h3 className="text-[24px] font-semibold mb-6">
                  {product.title}
                </h3>
                <img src={star} alt="" />
                <p className="text-gray-500">
                  Категория: Лабораторное оборудование
                </p>
                <p className="text-gray-500">Производитель: Lorem</p>
                <p className="text-gray-500">{product.desc}</p>
                <p className="text-gray-500">{product.position}</p>
                <span className="text-xl font-semibold">{product.price}</span>
                <div className=" flex mt-4 gap-3">
                  <span className="flex p-2 w-24 gap-4 pl-5 border border-[#456789] rounded-full">
                    <button className="">-</button>
                    <span className="">1</span>
                    <button className="">+</button>
                  </span>
                  <button className=" px-1 border border-[#456789] text-[#088269] rounded-full">
                    Задать вопрос
                  </button>
                  <button className=" px-2 border bg-[#088269] text-white rounded-full">
                    Добавить в корзину
                  </button>
                </div>

                <hr className=" mt-8 mb-5" />
                <h1 className="text-[18px] font-semibold mb-5">О товаре</h1>
                <p>
                  Но синтетическое тестирование, в своём классическом
                  <br />
                  представлении, допускает внедрение поэтапного и <br />
                  последовательного развития общества. В рамках спецификации
                  <br />
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CtranisaTovarTop;
