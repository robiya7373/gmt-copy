import { Link, NavLink } from 'react-router-dom';
import {uslugi} from "../../utils/klentData"
import  Certifikat  from '../About/Certifikat';
import { RiArrowRightSLine } from "react-icons/ri";
import Fakt from '../About/Fakt';
import Map from '../../components/Footer/Maps/Maps';

const Services = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/uslugi"} className="">
            Услуги
          </NavLink>
        </div>
        <h1 className="text-[48px] font-semibold text-[#020202] py-10">
          Услуги
        </h1>
        <div className="grid mb-28 grid-cols-2 gap-4 pb-10">
          {uslugi.map((data, index) => (
            <div
              key={index}
              className="flex justify-between border rounded-xl bg-white  "
            >
              <div className="flex flex-col pt-[10px] p-5">
                <h4 className="flex justify-between text-[18px] font-semibold  text-[#202020] py-4">
                  {data.title}
                </h4>
                <span className="flex justify-between text-[14px]  text-[#7A7687] ">
                  {data.subtitle}
                </span>
                <p className="flex justify-between text-[16px]  text-[#7A7687] font-medium">
                  {data.desc}
                </p>
                <button className=" border rounded-full p-2 w-[40%] text-[16px] text-[#088269] font-semiboold">
                  Заказать
                </button>
              </div>
              <img src={data.image} alt="" />
            </div>
          ))}
        </div>
        <Fakt/>

      </div>
      <div className="max-w-[1440px] mx-auto px-5 flex justify-between py-10">
        <div className=" w-[50%]">
          <h2 className="text-[30px] font-semibold">
            Вы сможете{" "}
            <NavLink className="text-[#088269]">оставить заявку</NavLink> на
            услуги и скачать бланк для заполнения
          </h2>
        </div>
        <div className="">
          <div className="flex justify-between items-center ">
            <button className="p-4 text-[16px] font-medium border rounded-xl">
              Бланк для заполнения
            </button>
            <button className="p-4 text-[16px] font-medium border rounded-xl">
              Заполненная форма
            </button>
          </div>
          <button className="my-5 ml-[250px] p-4 text-[16px] font-medium border rounded-xl bg-[#088269] text-white">
            Оставить заявку
          </button>
        </div>
      </div>
      <Certifikat />
      <Map />
    </>
  );
}

export default Services