import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Maps from "../../components/Footer/Maps/Maps";
import {
  paymentMethods,
  refundMethods,
  financingMethods,
} from "../../utils/dostafkaData";

const Oplata = () => {
  const renderMethod = (method) => (
    <div className="border-[#D5D1E1] border rounded-[10px] bg-white p-10 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">{method.title}</h2>
      <ul className="list-decimal text-left">
        {method.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

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
            Оплата
          </span>
        </NavLink>
      </div>
      <div className="max-w-[1440px] mx-auto px-5 mb-[80px] min-h-screen flex items-center justify-center p-4">
        <div>
          <h1 className="text-4xl font-semibold mb-8">Оплата</h1>
          <p className="mb-16">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи <br /> в Российской Федерации и соседних странах столкнулись с
            вызовом, требующим <br /> обновления приборов в различных
            направлениях, от установок компьютерной <br /> томографии до
            ультразвуковых сканеров и ЛОР комбайнов.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map(renderMethod)}
          </div>
          <h1 className="text-4xl font-semibold mb-8 mt-40">
            Порядок возврата денежных средств
          </h1>
          <p className="mb-16">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи <br /> в Российской Федерации и соседних странах столкнулись с
            вызовом, требующим <br /> обновления приборов в различных
            направлениях, от установок компьютерной <br /> томографии до
            ультразвуковых сканеров и ЛОР комбайнов.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {refundMethods.map(renderMethod)}
          </div>
          <h1 className="text-4xl font-semibold mb-8 mt-40">
            При оплате банковской картой
          </h1>
          <p className="mb-16">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи <br /> в Российской Федерации и соседних странах столкнулись с
            вызовом, требующим <br /> обновления приборов в различных
            направлениях, от установок компьютерной <br /> томографии до
            ультразвуковых сканеров и ЛОР комбайнов.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {financingMethods.map(renderMethod)}
          </div>
        </div>
      </div>
      <div className=" mb-[100px]">
        {" "}
        <Maps />
      </div>{" "}
    </>
  );
};

export default Oplata;
