import React from "react";
import CategoryList from "../../components/Detals/CategoryList";
import categories from "../../utils/katagoriyData";
import Kabinet from "../../components/MainSection/Kabinet/Kabinet";
import Vibirayut from "../../components/MainSection/Vibirayut/Vibirayut";
import Tovar from "../../components/MainSection/Tovar/Tovar";
import Brend from "../../components/MainSection/Brend/Brend";
import Kompaniya from "../../components/Footer/Kompaniya/Kompaniya";
import BredGramp from "../../components/Footer/BredGramp/BredGramp";
import Map from "../../components/Footer/Maps/Maps";
import Gmail from "../../components/Footer/Gmail/Gmail";
import CatalogList from "../../components/Detals/CatalogList";
const Katalog = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5">
        <div className=" flex gap-10">
         
            <CategoryList />
         
          {/* <div className="flex flex-wrap gap-[10px] mb-[25px]">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex-none border-[#D5D1E1] border  rounded-[10px] overflow-hidden ${
                  category.span > 1
                    ? "w-full md:w-[calc(100%-10px)] lg:w-[calc(50%-5px)] h-[304px]"
                    : "w-[calc(50%-5px)] md:w-[calc(33.333%-6.666px)] lg:w-[calc(25%-7.5px)] h-[154px] sm:h-[216px] lg:h-[304px]"
                }`}
              >
                <div className="p-[20px] bg-white h-[109px] sm:h-[148px] lg:h-[220px]">
                  <img
                    src={category.imgSrc}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t">
                  <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]">
                    {category.title}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <CatalogList />
        </div>
      </div>
      <Kabinet />
      <Vibirayut />
      <Tovar />
      <Brend />
      <Kompaniya />
      <BredGramp />
      <Map />
      <Gmail />
    </>
  );
};

export default Katalog;
