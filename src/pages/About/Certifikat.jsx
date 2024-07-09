import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Certifikat } from "../../utils/brendData";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const Brend = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
    <div className="bg-[#f8f7f3] py-[80px] pb-[150px]">
      <div className=" flex flex-col md:flex-row w-full gap-[30px]">
        <div className=" md:w-1/3 w-full">
          <h1 className="text-[30px] font-medium">
            Сертификаты <br /> на продукцию
          </h1>
        </div>
        <div className="h-[auto] md:w-2/3 w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              {Certifikat.map((slide, index) => (
                <div key={index} className="">
                  <div className="  ">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="border border-[#E5E2EE] p-3 rounded-lg bg-white"
                    />
                  </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brend;
