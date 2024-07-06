import React, { useState } from "react";
// import subtract from "../../public/Subtract.svg";
// import dasIcon1 from "../../public/dasIcon1.svg";
// import dasIcon2 from "../../public/dasIcon2.svg";
// import star from "../../public/star.svg";
import DostafkaGramp from "../Dostafka/DostafkaGramp";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Dost, accordionItems } from "../../utils/dostafkaData";
import Gmail from "../../components/Footer/Gmail/Gmail";
import BredGramp from "../../components/Footer/BredGramp/BredGramp";


const Dostafka = () => {
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
    <>
      <div className=" max-w-[1440px] mx-auto px-5 flex pt-[20px] gap-2 custom-text ">
        <Link to={"/"}>
          <span className="text-[#7A7687] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[#202020] font-medium cursor-pointer  flex items-center gap-2 ">
            Доставка
          </span>
        </Link>
      </div>

      <div className=" max-w-[1440px] mx-auto px-5 custom-margin mt-[40px] md:mt-[50px] lg:mt-[100px] ">
        <p className="text-[28px] md:text-[34px] lg:text-[48px] font-medium leading-[110%] text-[#202020] mb-[30px] lg:mb-[40px] ">
          Информация о доставке
        </p>
        <div className="w-full relative border border-[#D5D1E1] rounded-[10px] overflow-hidden mb-[25px] lg:mb-[40px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4928.13349616861!2d69.22925989857053!3d41.31567817943225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba28832acd7%3A0xf05928b7bdb7ab15!2sSamarqand%20Darvoza%2C%20Samarqand%20Darvoza%20ko&#39;chasi%205a%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1719611199524!5m2!1suz!2s"
            width={"100%"}
            height="450"
          ></iframe>

          <span className=" absolute bottom-5 right-5 ">
            <button className="text-[12px] bg-[#088269] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
              Пункт выдачи
            </button>
          </span>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <p></p>
          <p className="custom-text w-full md:w-[80%] lg:w-full text-[#202020] ">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов. Переход на полностью цифровую платформу
            при диагностике и лечении заболеваний также стал серьёзным
            испытанием для большинства больниц и частных клиник.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 custom-margin ">
        <div className="my-[35px] md:mb-[30px] lg:mb-[40px] ">
          <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] ">
            С нами выгодно и удобно
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4">
    {Dost.map((item, index) => (
      <div key={index} className="border border-[#D5D1E1] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px]">
       <img src={item.img} alt="" />
        <p className="text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]">
          {item.text}
        </p>
      </div>
    ))}
  </div>

        <div className="mt-[30px] lg:mt-[40px] flex justify-center lg:justify-end ">
          <button className="text-[12px] bg-[#088269] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
            Проверить статус доставки
          </button>
        </div>
      </div>

      <div className=" max-w-[1440px] mx-auto px-5 my-[160px] custom-margin grid grid-cols-1 lg:grid-cols-2 ">
        <div>
          <span className=" block w-[70%] md:w-[100%] lg:w-[70%] xl:w-[60%] ">
            <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] ">
              Правила получения товара в пункте выдачи
            </p>
          </span>

          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[120%] lg:leading-[140%] w-[90%] lg:w-[80%] pt-[10px] md:pt-[20px] lg:pt-[25px] pb-[30px] opacity-50  ">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов.
          </p>
        </div>

        <div className="flex flex-col gap-[20px] ">
          <div className="flex flex-col gap-[15px] md:gap-[10px] lg:gap-[15px]  border-t border-[#D5D1E1] pb-[10px] lg:pb-[20px] ">
            <p className="pt-[15px] md:pt-[25px] cursor-text font-semibold ">
              Подготовить документы
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-4 text-[#7A7687] ">
              Предварительно ознакомиться с условиями выдачи грузов на сайте и
              подготовьте нужные документы
            </p>
          </div>
          <div className="flex flex-col gap-[15px] md:gap-[10px] lg:gap-[15px]  border-t border-[#D5D1E1] pb-[10px] lg:pb-[20px] ">
            <p className="pt-[15px] md:pt-[25px] cursor-text font-semibold ">
              Проверка упаковки
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-4 text-[#7A7687] ">
              При получении необходимо внимательно осмотреть упаковку груза на
              наличие механических повреждений и нарушений целостности упаковки
            </p>
          </div>
          <div className="flex flex-col gap-[15px] md:gap-[10px] lg:gap-[15px]  border-t border-[--border] pb-[10px] lg:pb-[20px] ">
            <p className="pt-[15px] md:pt-[25px] cursor-text font-semibold ">
              Проверка товара
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-4 text-[#7A7687] ">
              Вскрыть каждую упаковку и проверите товар по количеству согласно
              накладной поставщика и на наличие повреждений товара внутри тары
            </p>
          </div>
        </div>
      </div>

      <BredGramp />

      <div className=" max-w-[1440px] mx-auto px-5 grid grid-cols-2 custom-margin">
        <div className=" order-1">
          <p className="text-[#202020] font-medium leading-[120%] text-[18px] md:text-[20px] xl:text-[30px] pb-[25px] md:pb-[30px] lg:pb-0  ">
            Вы сможете забрать оборудование <br />{" "}
            <span className="text-[#088269] ">самостоятельно</span> из нашего
            офиса{" "}
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 mb-[15px] gap-[10px] col-span-2 lg:col-span-1 order-2 lg:order-1  ">
          <div className="border border-[#D5D1E1] rounded-[10px] p-[25px]  bg-white ">
            <p className="mb-[15px] text-[16px] lg:text-[18px] font-semibold ">
              Контакты
            </p>
            <p className=" custom-text text-[#7A7687] font-medium mb-1 ">
              +7 (000) 000-00-00
            </p>
            <p className=" custom-text text-[#7A7687] font-medium ">
              info@mail.ru
            </p>
          </div>
          <div className="border border-[#D5D1E1] rounded-[10px] p-[25px]  bg-white ">
            <p className="mb-[15px] text-[16px] lg:text-[18px] font-semibold ">
              Режим работы
            </p>
            <p className=" custom-text text-[#7A7687] font-medium mb-1 ">
              пн-пт: 09:00-19:00
            </p>
            <p className=" custom-text text-[#7A7687] font-medium ">
              сб-вс: выходной
            </p>
          </div>
        </div>

        <div className=" order-1 w-full relative border border-[#D5D1E1] rounded-[10px] overflow-hidden mb-[160px] col-span-2 ">
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

      <DostafkaGramp title={accordionItems} />

      <div className="max-w-[1440px] mx-auto px-5 mt-[160px] grid grid-cols-1 gap-[30px] lg:gap-0 lg:grid-cols-2 custom-margin ">
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
              Нажимая «Отправить», я соглашаюсь с обработкой персональных данных
              на условиях{" "}
              <a href="#" className="text-[#088269] underline">
                Политики конфиденциальности
              </a>
            </p>
          </div>
        </form>
      </div>

      <Gmail />
    </>
  );
};

export default Dostafka;
