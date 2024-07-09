import React, { useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FaPhoneAlt, FaTelegramPlane, FaVk } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'
import { LuMail } from 'react-icons/lu'

const KontaktTop = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        question: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
          name: "",
          phone: "",
          email: "",
          question: "",
        });
      };
  return (
    <div className="flex justify-between mb-8">
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
            <li className=" border bg-[#088269] p-2 rounded-md">
              {" "}
              <FaVk />
            </li>{" "}
            <li className=" border bg-[#088269] p-2 rounded-md">
              {" "}
              <FaTelegramPlane />
            </li>{" "}
            <li className=" border bg-[#088269] p-2 rounded-md">
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
  </div>
  )
}

export default KontaktTop