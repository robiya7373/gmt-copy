import { useRef } from "react";
import { kompaniya } from "../../../utils/klentData";
import Slider from "react-slick";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const Kompaniya = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="bg-[#f8f7f3] py-[80px] pb-[350px]">
      <div className="max-w-[1440px] mx-auto px-5 flex flex-col md:flex-row gap-[30px]">
        <div className=" md:w-1/3 w-full">
          <div className="flex justify-between">
            <h1 className="text-[30px] font-medium">
              Новости <br /> компании
            </h1>
            <button className="px-5 py-3 hidden sm:block md:hidden  rounded-full border text-[14px] text-[#fff] bg-[#088269]">
              Сертификаты
            </button>
          </div>
        </div>
        <div className="h-[350px]  md:w-2/3 w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              {kompaniya.map((slide, index) => (
                <div
                  key={index}
                  className=" border border-[#E5E2EE] rounded-xl"
                >
                  <div className="w-full flex items-center justify-center ">
                    <img src={slide.image} alt={slide.title} />
                  </div>
                  <p className="text-[#494949] text-[12px] font-light sm:text-[15px] p-4  w-full sm:w-[80%]">
                    {slide.data}
                  </p>
                  <h2 className="text-[#050505] text-[18px] font-semibold sm:text-[15px] px-4 w-full sm:w-[80%]">
                    {slide.title}
                  </h2>
                  <p className="text-[#686868] text-[12px] font-normal sm:text-[15px] p-4  w-full sm:w-[80%]">
                    {slide.text}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex sm:hidden md:flex justify-center md:justify-between  ">
            <div className="hidden md:flex gap-3 ml-3">
              <button
                className="w-[41px] h-[41px] rounded-full border flex items-center justify-center"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <HiArrowSmLeft />
              </button>
              <button
                className="w-[41px] h-[41px] rounded-full border flex items-center justify-center"
                onClick={() => sliderRef.current.slickNext()}
              >
                <HiArrowSmRight />
              </button>
            </div>
            <button className="px-5 py-3  rounded-full border text-[14px] text-[#fff] bg-[#088269]">
              Сертификаты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kompaniya;
