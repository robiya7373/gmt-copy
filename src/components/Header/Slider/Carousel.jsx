import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import img1 from "../../../../public/assets/Banner.png";
import "../../../index.css"
const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 relative">
    <div className="bg-[#f8f7f3] py-[20px] slick-track">
      <div className="h-full md:h-[368px] w-full flex flex-col gap-[40px]">
        <div>
          <Slider ref={sliderRef} {...settings}>
            {[img1, img1, img1].map((image, index) => (
              <div
                key={index}
                className="w-[100%] h-[100%] md:h-[350px] flex justify-between bg-[#e5e4ed] border rounded-2xl"
              >
                <div className="p-[30px] flex flex-col justify-center md:w-1/2">
                  <h2 className="text-[#202020] text-[32px] lg:text-[45px] w-[100%] lg:w-[90%] leading-[37px] lg:leading-[52px]">
                    Заголовок баннера в пару строк
                  </h2>
                  <p className="text-[#7A7687] py-[20px] text-[14px] lg:text-[16px] w-[100%] sm:w-[80%] lg:w-[60%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <div className="flex gap-2 pt-[20px] sm:pt-[40px]">
                    <button className="px-4 sm:px-6 py-2 text-[13px] sm:text-[16px] bg-[#088269] border rounded-full text-[#fff]">
                      Запросить цену
                    </button>
                    <button className="px-4 sm:px-6 py-2 text-[13px] sm:text-[16px] border rounded-full border-[#088269] text-[#088269]">
                      В каталог
                    </button>
                  </div>
                </div>
                <div className="w-full h-[350px] md:w-1/2 flex items-center justify-center border-l">
                  <img
                    src={image}
                    alt={"Banner"}
                    className="w-full h-full object-cover rounded-r-2xl"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-between absolute right-[60px] bottom-10">
          <div className="flex gap-3">
            <button
              className="w-[41px] h-[41px] rounded-full border bg-[#fff] flex items-center justify-center"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <HiArrowSmLeft />
            </button>
            <button
              className="w-[41px] h-[41px] rounded-full border bg-[#fff] flex items-center justify-center"
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

export default Carousel;
