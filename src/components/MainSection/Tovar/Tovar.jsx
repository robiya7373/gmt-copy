import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import tovar from "../../../utils/tovarData";
import { BsHeart } from "react-icons/bs";
import { BiObjectsVerticalBottom } from "react-icons/bi";

const Tovar = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % tovar.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + tovar.length) % tovar.length);
  };

  const displayedTovar = tovar.slice(startIndex, startIndex + 3);
  if (displayedTovar.length < 3) {
    displayedTovar.push(...tovar.slice(0, 3 - displayedTovar.length));
  }

  return (
    <div className="bg-[#F8F7F3]">
      <div className=" py-[100px] pl-9">
        <div className="flex justify-between ">
          <div className="max-w-[1440px] mx-auto p-5 relative">
            <h2 className=" mt-5 mr-[200px] text-[30px] font-medium">
              Каталог товаров
            </h2>
            <div className=" mt-[40px] flex flex-col  items-start">
              <button className="mb-[10px] text-[#7A7687] active:text-[#088269] text-[16px] font-medium active:border-b-[#088269] active:border-b-2">
                Хиты продаж
              </button>
              <button className="mb-[10px] text-[#7A7687] active:text-[#088269] text-[16px] font-medium active:border-b-[#088269] active:border-b-2">
                Новинки
              </button>
              <button className="mb-[10px] text-[#7A7687] active:text-[#088269] text-[16px] font-medium active:border-b-[#088269] active:border-b-2">
                Акции
              </button>
            </div>
          </div>

          <div className="">
          <div className="max-w-[1000px] mx-auto mr-[10px] mt-9 ">
          <div className="flex gap-4">
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

            <div className=" flex justify-between items-center mt-[40px]">
              <div className="flex items-center gap-3">
                <div
                  onClick={handlePrev}
                  className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer"
                >
                  <GoArrowLeft />
                </div>
                <div
                  onClick={handleNext}
                  className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer"
                >
                  <GoArrowRight />
                </div>
              </div>

              <div className="mr-[100px] flex  gap-4 justify-items-end">
                <button className="transition duration-300 flex justify-center items-center px-6 py-[11px] rounded-full font-semibold text-[16px] text-[#088269]  border border-[#D5D1E1] ">
                  Бесплатная консультация
                </button>
                <button className="transition duration-300 flex justify-center items-center px-6 py-[11px] rounded-full font-semibold text-[16px] text-white bg-[#088269] border-none ">
                  Все товары
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tovar;