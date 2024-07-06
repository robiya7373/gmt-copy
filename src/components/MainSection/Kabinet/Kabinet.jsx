import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import cabinet from "../../../utils/kabinetData";

const Kabinet = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (cabinet.length - 2));
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + (cabinet.length - 2)) % (cabinet.length - 1)
    );
  };

  const displayedImages = cabinet.slice(startIndex, startIndex + 3);

  return (
    <div className="max-w-[1440px] mx-auto p-5 relative">
      <h2 className="text-[30px] font-medium ">
        Комплексное оснащение кабинетов
      </h2>
      <div className="flex justify-between items-start gap-2 py-[43px]">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden w-[450px]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[517px] object-cover"
            />
            <p className="py-[20px] px-5 ">{image.alt}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-2 gap-4">
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
        <div className="flex items-center gap-4">
          <button className="border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
            Бесплатная консультация
          </button>
          <button className="border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
            Рассчитать стоимость
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kabinet;
