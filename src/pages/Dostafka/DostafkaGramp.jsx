import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../../index.css";


const Accordion = ({ title, show = true }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = Array.isArray(title) ? title : [title];

  return (
    <div
      className={` ${
        show ? "bg-[#E5E4ED] custom-margin" : " bg-transparent"
      }  `}
    >
      <div
        className={`${
          show
            ? "grid-cols-1 lg:grid-cols-2  py-[60px] md:py-[50px] lg:py-[110px]"
            : "grid-cols-1"
        } max-w-[1440px] mx-auto px-5 grid  gap-[30px] lg:gap-0`}
      >
        <div className={`${show ? "block" : "hidden"}`}>
          <div className="w-[80%]">
               <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] ">
              Документы, необходимые для получения груза
            </p>
            <p className="text-[#202020] pt-[10px] md:pt-[20px] lg:pt-[25px]">
              По копиям доверенностей и доверенностям с незаполненными
              обязательными реквизитами отгрузка не производится
            </p>
          </div>
        </div>

        <div className={` ${show ? "border-t border-[#D5D1E1]" : ""} `}>
          {accordionItems.map((item, index) => (
            <div key={index} className={`border-b border-[#D5D1E1] `}>
            <div
  className="flex justify-between items-center cursor-pointer py-[15px] lg:py-[25px]"
  onClick={() => toggleAccordion(index)}
>
  <span className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
    {item.title}
  </span>
  <span
    className={`${
      activeIndex === index
        ? "rotate-45 text-white bg-[#088269]"
        : "rotate-0"
    } duration-200 border-[#D5D1E1] border w-[32px] h-[32px] rounded-full flex justify-center items-center text-[28px] pb-[5px]`}
  >
    +
  </span>
</div>

              <CSSTransition
                in={activeIndex === index}
                timeout={200}
                classNames="accordion"
                unmountOnExit
              >
                <div className="pb-5">
                  <p className="custom-text text-[#7A7687]">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </CSSTransition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
