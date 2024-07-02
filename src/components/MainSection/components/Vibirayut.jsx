// import lightning from "../../../public/lightning.svg";
import {PiNumberSevenBold,PiPulse } from "react-icons/pi";
import { TbBrandZapier } from "react-icons/tb";
import { TfiBoltAlt } from "react-icons/tfi";
// import line from "../../../public/line.svg";
// import seven from "../../../public/7.svg";

const Vibirayut = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-5 relative ">
      <div className="mb-[25px] md:mb-[30px] lg:mb-[40px] ">
        <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[--second] ">
          Почему выбирают нас?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4 ">
        <div className="border-[#D5D1E1]  border rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
          <TfiBoltAlt className=" h-36 w-36" />
          <p className="text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]">
            Быстрая доставка
          </p>
        </div>
        <div className="border-[#D5D1E1]  border rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
          < TbBrandZapier className=" h-36 w-36" />
          <p className="text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]">
            Быстрая доставка
          </p>
        </div>
        <div className="border-[#D5D1E1]  border rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
          <PiPulse className=" h-36 w-36"/>
          <p className="text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]">
            Быстрая доставка
          </p>
        </div>
        <div className="border-[#D5D1E1]  border rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
          <PiNumberSevenBold className=" h-36 w-36" />
          <p className="text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]">
            Быстрая доставка
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vibirayut;
