import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import img6o from "../../../../public/assets/img6o.png";

const Katalog = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="max-w-[1440px] mx-auto p-5 relative">
      <div className=" flex justify-between">
        <ul className="text-[--second] flex items-center gap-[15px] lg:gap-[25px] ">
          <NavLink
            to={"/Katalog"}
            className="flex items-center gap-1 text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer "
          >
            <RiMenu2Fill />
            <span>Каталог</span>
          </NavLink>
          <NavLink
            to={"/prizvoditel"}
            className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer "
          >
            Производители
          </NavLink>
          <NavLink to={"/podkluche"} className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            Кабинеты под ключ
          </NavLink>
          <NavLink to={"/uslugi"} className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            Услуги
          </NavLink>
          <NavLink
            to={"/aksiya"}
            className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer "
          >
            Акции
          </NavLink>
          <li className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            Покупателям
          </li>
          <NavLink
            to={"/kontakt"}
            className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer "
          >
            Контакты
          </NavLink>
        </ul>
        <div className="flex gap-[17px] items-center ">
          <span className="flex items-center gap-1 text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer ">
            <span>Москва</span>
            <CiLocationOn />
          </span>
          <div className="bg-[--pri] rounded-full text-white p-2 xl:hidden ">
            <FiPhone />
          </div>
          <div className=" gap-[10px] hidden xl:flex ">
            <button className="text-[12px]   py-2 lg:py-[11px] px-[20px] lg:px-[30px] border border-[--border] text-[--second] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
              +7(495)000-00-00
            </button>
            <div>
              <button
                className="border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white"
                onClick={handleOpenModal}
              >
                Заказать звонок
              </button>

              {showModal && (
                <div className=" z-[999] fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
                    <div className="flex justify-between">
                      <h2 className="text-lg font-semibold">Заказать звонок</h2>

                      <button
                        onClick={handleCloseModal}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <IoCloseOutline className=" cursor-pointer w-7 h-7" />
                      </button>
                    </div>
                    <div className="mt-4">
                      <span className="mt-2 flex gap-4">
                        <img
                          className=" rounded-full w-14 h-14"
                          src={img6o}
                          alt=""
                        />
                        <h1>
                          <p>Олег Сергеевич</p>
                          <p className=" opacity-55 text-sm">
                            Менеджер по продажам
                          </p>
                        </h1>
                      </span>
                      <div className="my-4">
                        <label htmlFor="tel" className="block text-gray-700">
                          Ваш телефон*
                        </label>
                        <input
                          type="tel"
                          id="tel"
                          className="w-full px-3 border-b "
                        />
                      </div>
                      <div className="my-4">
                        <label
                          htmlFor="text"
                          className="block text-gray-700 mb-12"
                        >
                          Ваше сообщение{" "}
                        </label>
                        <input
                          type="text"
                          id="text"
                          className="w-full px-3 border-b "
                        />
                      </div>

                      <button
                        onClick={handleCloseModal}
                        className="bg-[#088269] text-white p-2 rounded-full"
                      >
                        Оставить заявку
                      </button>
                      <p className="text-xs mt-4">
                        Нажимая «Отправить», я соглашаюсь c обработкой
                        персональных данных на условиях <br />
                        <span className="text-[#088269]">
                          {" "}
                          Политики конфиденциальности.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katalog;
