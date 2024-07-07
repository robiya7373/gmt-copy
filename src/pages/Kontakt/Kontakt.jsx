import React from "react";
// import { FaVk, FaTelegramPlane } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";
// import { GoClock } from "react-icons/go";
// import { BsTelephone } from "react-icons/bs";
// import { LuMail } from "react-icons/lu";
// import { FaPhoneAlt } from "react-icons/fa";
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
      {/* <div className="flex justify-between mb-8">
        <div className="p-6 w-[49%]  bg-white rounded-xl shadow-md space-y-4">
          <h2 className="text-xl font-bold">ООО Глобал Медикал Трейд</h2>

          <div>
            <p className="font-semibold flex  text-[#7A7687] ">
              {" "}
              <IoLocationOutline className="mr-2" />
              Юридический адрес:
            </p>
            <p>Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
          </div>

          <div>
            <p className="font-semibold flex text-[#7A7687] ">
              <IoLocationOutline className="mr-2" />
              Фактический адрес:
            </p>
            <p>Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
          </div>

          <div>
            <p className="font-semibold text-[#7A7687] flex">
              {" "}
              <GoClock className=" mr-2" /> Режим работы:
            </p>
            <p>Пн-Пт с 09:00-19:00</p>
            <p>Сб-Вс - выходной</p>
          </div>

          <div>
            <p className="font-semibold">
              Звоните. Звонки по России бесплатны:
            </p>

            <p className="flex text-[#7A7687]">
              {" "}
              <BsTelephone className=" mt-1 mr-2" />
              Телефоны:
            </p>
            <div className="flex gap-5">
              <p>8-800-000-00-00</p>
              <p>+7-000-000-00-00</p>
              <p>+7-495-000-00-00</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#7A7687]">
              {" "}
              <LuMail className=" inline mr-2 mb-1" />
              Пишите:
            </p>
            <p>info@mail.ru</p>
          </div>
          <div className="flex gap-6">
            <div>
              <p className="mb-4 font-semibold">Реквизиты: </p>
              <span className="flex gap-5">
                <span>
                  <p className="text-[#7A7687]">ИНН</p>
                  <p>9717039181</p>
                </span>

                <span>
                  <p className="text-[#7A7687]">ОГРН</p>
                  <p>1167746796986</p>
                </span>
              </span>
            </div>
            <div>
              <p className="mb-6 font-semibold">Мы в соцсетях</p>
              <ul className="flex gap-3 text-white ">
                <li className=" border bg-emerald-600 p-2 rounded-md">
                  {" "}
                  <FaVk />
                </li>{" "}
                <li className=" border bg-emerald-600 p-2 rounded-md">
                  {" "}
                  <FaTelegramPlane />
                </li>{" "}
                <li className=" border bg-emerald-600 p-2 rounded-md">
                  <FaPhoneAlt />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 w-[49%]  bg-white rounded-xl shadow-md space-y-4">
          <div>
            <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] ">
              Вам нужна консультация?
            </p>
            <p className="text-[#202020] w-[80%] custom-text pt-[10px] md:pt-[20px] lg:pt-[25px] font-medium ">
              Задайте их по номеру телефона{" "}
              <span className="text-[#088269] ">+7 (495) 000-00-00</span> или
              оставьте свои координаты и наш менеджер перезвонит вам через 10
              минут
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white  p-10 rounded-[10px] border border-[#D5D1E1] "
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-[11px] text-[14px] outline-none border-b border-[#D5D1E1] "
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Ваш телефон"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-[11px] text-[14px] outline-none border-b border-[#D5D1E1] "
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Ваш email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-[11px] text-[14px] outline-none border-b border-[#D5D1E1] "
              />
            </div>
            <div className=" lg:mb-[30px] ">
              <textarea
                name="question"
                placeholder="Ваш вопрос"
                value={formData.question}
                onChange={handleChange}
                required
                className="w-full h-[100px] resize-none p-[11px] text-[14px] outline-none border-b border-[#D5D1E1] "
              />
            </div>

            <div className="flex flex-col  md:gap-[40px] items-center md:flex-row mt-[30px] lg:gap-[30px]  lg:items-center ">
              <button className="text-[12px] bg-[#088269] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
                Отправить
              </button>

              <p className="mt-4 text-[12px] font-medium text-[#7A7687] opacity-60">
                Нажимая «Отправить», я соглашаюсь с обработкой персональных
                данных на условиях{" "}
                <a href="#" className="text-[#088269] underline">
                  Политики конфиденциальности
                </a>
              </p>
            </div>
          </form>
        </div>
      </div> */}
      <KontaktTop/>
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
