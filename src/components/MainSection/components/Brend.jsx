import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Data from "../../../utils/brendData";

const Brend = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () =>
    setStartIndex((prevIndex) => (prevIndex + 1) % Data.length);
  const handlePrev = () =>
    setStartIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);

  const displayedData = [...Data, ...Data].slice(startIndex, startIndex + 3);

  return (
    <div className="bg-[#F8F7F3]">
      <div className=" py-[100px]">
        <div className="flex justify-between ">
          <div className="max-w-[1440px] mx-auto p-5 relative">
            <h2 className="mr-[360px] text-[30px] font-medium">Бренды</h2>
            <p className=" text-[16px] font-normal text-[#7A7687] mt-8 ">
              Эксклюзивные поставщики
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              {displayedData.map((data, index) => (
                <div key={index} className="border rounded-xl w-[300px]">
                  <img
                    src={data.image}
                    alt={data.alt}
                    className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10"
                  />
                  <div className="p-4">
                    <h3 className="pr-[80px] text-[18px] font-semibold mb-2 text-[#202020]">
                      {data.title}
                    </h3>
                  </div>
                </div>
              ))}
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
                <button className="border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-7 hover:bg-[#088269] hover:text-white">
                  Сертификаты
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brend;
