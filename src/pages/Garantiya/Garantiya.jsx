import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Garantiy } from "../../utils/dostafkaData";
import Map from "../../components/Footer/Maps/Maps";

const Garantiya = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5 flex pt-[20px] gap-2 custom-text mb-[80px]">
        <NavLink to="/">
          <span className="text-[#7A7687] cursor-pointer flex items-center gap-2">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </NavLink>
        <NavLink>
          <span className="text-[#202020] font-medium cursor-pointer flex items-center gap-2">
            Гарантии
          </span>
        </NavLink>
      </div>
      <div className="max-w-[1440px] mx-auto px-5 ">
        <div>
          {" "}
          <h1 className="text-4xl font-semibold mb-8">Гарантии</h1>
          <p className=" mb-4">
            Регулярное сервисное обслуживание медицинской техники – залог ее
            надежной, <br /> беспроблемной эксплуатации, а также
            продолжительного срока службы. <br /> Периодическая диагностика
            позволяет выявить любые неисправности, <br /> отклонения от
            нормального рабочего режима на самых ранних сроках. Это <br />{" "}
            предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам.{" "}
          </p>
          <p>
            Являясь авторизованным дилером брендов, продукция которых
            представлена в <br /> каталоге, компания:
          </p>
          <ul className=" list-decimal text-left mx-8 my-5 ">
            <li>
              Предоставляет услуги сервисного и гарантийного обслуживания.
            </li>
            <li>
              Осуществляет поставку оригинальных запчастей и комплектующих.
            </li>
            <li>
              Обучает медицинский персонал работе с современным <br />{" "}
              высокотехнологичным оборудованием.
            </li>
          </ul>
          <p className=" mb-[80px]">
            Глобал Медикал Трейд является надежным поставщиком медицинского{" "}
            <br />
            оборудовани, предлагая своим клиентам качественную продукцию по
            лучшей <br /> цене. Наша компания гарантирует всем клиентам
            возможность воспользоваться <br /> услугами квалифицированных
            мастеров в установке, пуско-наладке, сервисном и <br /> техническом
            обслуживании приобретенного оборудования.
          </p>
        </div>{" "}
        <div className=" custom-margin ">
          <div className="my-[35px] md:mb-[30px] lg:mb-[40px] ">
            <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] ">
              С нами выгодно и удобно
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4">
            {Garantiy.map((item, index) => (
              <div
                key={index}
                className="border border-[#D5D1E1] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px]"
              >
                <img src={item.img} alt="" />
                <p className="text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%] text-center">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-[30px] mb-[30px] lg:mt-[40px] flex justify-center lg:justify-end gap-5 ">
            <button className="text-[12px] border border-[#088269] bg-transparent text-[#088269] py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] hover:text-white duration-200  ">
              Гарантийный случай{" "}
            </button>
            <button className="text-[12px] bg-[#088269] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
              Замена товара
            </button>
          </div>
          <div className=" bg-[#088269] rounded-lg flex justify-between p-10 my-40">
            <h1 className="text-4xl font-semibold text-white">Внимание!</h1>
            <div className=" text-white ">
              {" "}
              <p className="mb-6">
                Рассмотрение заявки на замену товара осуществляется в срок до 30
                дней <br /> со дня её регистрации согласно п. 1 ст. 12 Закона №
                59-ФЗ, при условии <br /> предоставления документов,
                перечисленных в договоре.
              </p>
              <p>
                Оформление гарантийного случая осуществляется согласно <br />
                Гражданскому кодексу РФ, при условии предоставления документов,{" "}
                <br />
                перечисленных в договоре и при наличии заявления с указанием{" "}
                <br />
                причины возврата, оформленного надлежащим образом.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[100px]">
        {" "}
        <Map />
      </div>
    </>
  );
};

export default Garantiya;
