import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import KontaktTop from "./KontaktTop";

const Kontakt = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-5">
      <div className="  flex pt-[20px] gap-2 custom-text mt-5 ">
        <Link to={"/"}>
          <span className="text-[#7A7687] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[#202020] font-medium cursor-pointer  flex items-center gap-2 ">
            Контакты
          </span>
        </Link>
      </div>
      <h1 className="text-4xl mt-28 mb-8 font-semibold ml-1">Контакты</h1>
      <KontaktTop />
      <div className=" order-1 w-full relative border border-[#D5D1E1] rounded-[10px]  shadow-md overflow-hidden mb-[160px] col-span-2 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4928.13349616861!2d69.22925989857053!3d41.31567817943225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba28832acd7%3A0xf05928b7bdb7ab15!2sSamarqand%20Darvoza%2C%20Samarqand%20Darvoza%20ko&#39;chasi%205a%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1719611199524!5m2!1suz!2s"
          width={"100%"}
          height="450"
        ></iframe>
        <span className=" absolute bottom-5 right-5 ">
          <button className="text-[12px] bg-[#088269] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
            Построить маршрут
          </button>
        </span>
      </div>
    </div>
  );
};

export default Kontakt;
