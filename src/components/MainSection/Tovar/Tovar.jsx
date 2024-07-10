import TovarList from "../../Detals/TovarList";
import NextPrev from "../../Detals/NextPrev";
import { useState } from "react";

const Tovar = () => {
  const [startIndex, setStartIndex] = useState(0);

  return (
    <div className="bg-[#F8F7F3]">
      <div className=" py-[100px] pl-9">
        <div className="flex justify-between max-w-[1440px] mx-auto px-5 ">
          <div className="p-5 relative">
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
              <TovarList startIndex={startIndex} />
              <div className="flex justify-between items-center mt-16 ml-7">
                <NextPrev setStartIndex={setStartIndex} />
                <div className="flex mr-2  gap-4 justify-items-end">
                  <button className=" transition duration-300 flex justify-center items-center px-6 py-[11px] rounded-full font-semibold text-[16px] text-[#088269]  border border-[#D5D1E1] ">
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
