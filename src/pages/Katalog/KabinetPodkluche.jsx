import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import cabinet from "../../utils/kabinetData"
// import Select from '../components/main/select/Select';
// import Order from '../components/cabinet/Order';
// import Question from '../components/main/question/Question';
// import Course from '../components/main/course/Course';
// import FastQuestion from '../components/delivery/FastQuestion';
import { RiArrowRightSLine } from "react-icons/ri";
import Vibirayut from '../../components/MainSection/Vibirayut/Vibirayut';
import BredGramp from '../../components/Footer/BredGramp/BredGramp';
import Map from '../../components/Footer/Maps/Maps';
import Gmail from '../../components/Footer/Gmail/Gmail';

const KabinetPodkluche = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className=" max-w-[1440px] mx-auto px-5 pb-[20px]">
        <div className="flex items-center gap-2 py-5 text-[16px]  font-normal">
          <NavLink to={"/"} className="text-[#7A7687]">
            Главная
          </NavLink>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/kabinet-podklyuch"} className="">
            Кабинеты под ключ
          </NavLink>
        </div>
        <div className="">
          <h1 className="text-[48px] font-medium pt-[80px]">
            Кабинеты под ключ
          </h1>
          <div className="w-[full] grid grid-cols-2 gap-4 mb-28 py-10">
            {cabinet.map((item, index) => (
              <div
                key={index}
                className=" border rounded-lg overflow-hidden h-[380px] cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-[320px] object-cover"
                  onClick={() => navigate(`/kabinet-podklyuch/${item.id}`)}
                />
                <h3
                  className="py-[20px] px-5 bg-white text-[18px] font-medium "
                  onClick={() => navigate(`/kabinet-podklyuch/${item.id}`)}
                >
                  {item.alt}
                </h3>
              </div>
            ))}
          </div>
          <Vibirayut />

        </div>
      </div>
      <BredGramp />
      <Map />
      <Gmail />

      {/* <Order />
      <FastQuestion />
      <Question />
      <Course /> */}
    </>
  );
}

export default KabinetPodkluche