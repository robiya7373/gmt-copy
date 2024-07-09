import React from "react";
import img1o from "../../../public/assets/img1o.png";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Fakt from "./Fakt";
import Certifikat from "./Certifikat";
import Brend from "../../components/MainSection/Brend/Brend";
import Vibirayut from "../../components/MainSection/Vibirayut/Vibirayut";
import Klent from "../../components/MainSection/Klent/Klent";
import Map from "../../components/Footer/Maps/Maps";

const Okompaniya = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="flex pt-[20px] gap-2 custom-text mb-[80px]">
          <NavLink to="/">
            <span className="text-[#7A7687] cursor-pointer flex items-center gap-2">
              Главная <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
            </span>
          </NavLink>
          <NavLink>
            <span className="text-[#202020] font-medium cursor-pointer flex items-center gap-2">
              О компании
            </span>
          </NavLink>
        </div>
        <div className="flex pt-[20px] gap-2 custom-text mb-[80px]">
          <img src={img1o} alt="" className="w-full" />
        </div>
        <div className="flex justify-between mb-28">
          <h1 className="text-[42px] font-semibold">Глобал медикал трейд</h1>
          <span className="mt-3 text-[16px] font-semibold">
            <p>
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи <br /> в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим <br /> обновления приборов в различных
              направлениях, от установок компьютерной <br /> томографии до
              ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью{" "}
              <br /> цифровую платформу при диагностике и лечении заболеваний
              также стал <br /> серьёзным испытанием для большинства больниц и
              частных клиник.
            </p>
            <p>
              Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать{" "}
              <br />
              специалистам всю необходимую помощь в деле поставок медицинского{" "}
              <br />
              оборудования. Наш каталог включает передовое оборудование от
              лучших <br />
              производителей России, Европы, Азии и США.
            </p>
          </span>
        </div>
        <Fakt />
      </div>
      <Klent />
      <div className="max-w-[1440px] mx-auto px-5 mt-36">
        <Vibirayut />
        <Brend />
        <Certifikat />
        <Map/>
      </div>
    </>
  );
};

export default Okompaniya;
