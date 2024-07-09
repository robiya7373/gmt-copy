import React from "react";

const Gmail = () => {
  return (
    <div className="bg-[#e5e4ed] mt-40 ">
      <div className="max-w-[1440px] mx-auto px-5 grid gmail justify-center sm:justify-end ">
        <div className="pt-[35px]">
          <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] ">
            Подпишитесь и будьте в курсе!
          </p>
          <p className=" text-[#7A7687] font-medium text-[12px] md:text-[14px] lg:text-[16px] pt-[10px] mb-[30px] lg:pt-[20px] lg:mb-[45px] ">
            Акции, скидки, распродажи ждут!
          </p>
          <div className="flex rounded-full bg-white border border-[#D5D1E1] overflow-hidden justify-between mb-[14px] ">
            <input
              type="text"
              name=""
              id=""
              className=" sm:grow outline-none px-5 "
              placeholder="Введите email"
            />
            <button className="text-[12px] bg-[ #088269] bg-[#07745E]  text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
              Подписаться
            </button>
          </div>
          <div className="flex gap-[10px] items-center mb-[37px] ">
            <input
              type="checkbox"
              name=""
              id="subscrib"
              className="w-4  h-4  accent-[ #088269] "
            />
            <label htmlFor="subscrib" className="text-[12px] ">
              {" "}
              Я даю согласие на обработку своих персональных данных.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gmail;
