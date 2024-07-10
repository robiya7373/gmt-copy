import React from "react";
import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const FooterTop = () => {
  return (
    <div className="bg-[#088269]">
      <div className="max-w-[1440px] mx-auto px-5 flex  justify-between p-5 ">
        <div className="w-[210px]">
          <h4 className="border-b-2 border-b-[#F8F7F3] text-[#F8F7F3] text-[14px] py-5">
            Покупателям
          </h4>
          <div className="flex justify-between py-5 gap-5">
            <div className="flex flex-col">
              <NavLink to={"/okompaniya"} className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                О компании
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Сертификаты
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Вакансии
              </NavLink>
              <NavLink to={"/garantiya"} className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Гарантии
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Услуги
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Акции
              </NavLink>
              <NavLink to={"/dostafka"} className="text-[14px]  text-[#F8F7F3]">
                Доставка
              </NavLink>
            </div>
            <div className="flex flex-col">
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Оплата
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Возврат
              </NavLink>
              <NavLink to={"/faq"} className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                FAQ
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Лизинг
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Отзывы
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Блог
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-[650px]">
          <h4 className="border-b-2 border-b-[#F8F7F3]  text-[#F8F7F3] text-[14px] py-5">
            Каталог
          </h4>
          <div className="flex justify-between gap-10 py-5">
            <ul className="flex flex-col">
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Реанимацияи
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Хирургия
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Офтальмология
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Лабораторная диагностика
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Акушерство и Гинекология
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Гистология
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3]">
                Косметология
              </NavLink>
            </ul>
            <ul className="flex flex-col">
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Орториноларингология
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Рентгенология и томография
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Стрерилизация
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Физиотерапия и реабилитация
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Функциональная диагностика
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Эндоскопия
              </NavLink>
            </ul>
            <ul className="flex flex-col">
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Новинки
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Распродажи
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Кабинеты под ключ
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] mb-[10px]">
                Скачать каталог
              </NavLink>
            </ul>
          </div>
        </div>
        <div className=" text-[#F8F7F3] w-[210px]">
          <h4 className="border-b-2 border-b-[#F8F7F3]  text-[#F8F7F3] text-[14px] py-5">
            Покупателям
          </h4>
          <div className=" py-5">
            <h5 className="text-[14px]  text-[#F8F7F3] ">Адрес:</h5>
            <p className="text-[14px]  text-[#F8F7F3] mb-[25px]">
              г. Москва, ул. Московская, д. 35{" "}
            </p>
            <div className=" flex items-center gap-3 mb-[20px]">
              <span className="text-[14px]  text-[#F8F7F3] ">
                Карта проезда
              </span>
              <MdArrowOutward />
            </div>
            <p className="text-[14px]  text-[#F8F7F3] ">График работы:</p>
            <p className="text-[14px]  text-[#F8F7F3] mb-[25px]">
              Пн-Пт с 09:00-19:00,
              <br /> Сб-Вс - выходной
            </p>
            <div className="">
              <p className="text-[14px]  text-[#F8F7F3] mb-[5px]">
                +7 000-000-00-00
              </p>
              <p className="text-[14px]  text-[#F8F7F3] mb-[5px]">
                +7 495-000-00-00
              </p>
              <p className="text-[14px]  text-[#F8F7F3] mb-[5px]">
                8 800-000-00-00
              </p>
              <p className="text-[14px]  text-[#F8F7F3] mb-[5px]">
                info@mail.ru
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
