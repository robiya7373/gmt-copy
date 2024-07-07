import React from "react";
import img1 from "../../../public/assets/image1t.png";
import img2 from "../../../public/assets/img3c.png";
import img3 from "../../../public/assets/image3t.png";
import img4 from "../../../public/assets/image4t.png";
import img5 from "../../../public/assets/image2t.png";

const CatalogList = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 w-[1200px] mt-10">
        <div className=" border border-[#E5E2EE] rounded-lg h-[400px]">
          <img src={img1} alt="" className=" w-full h-[80%] rounded-t-lg" />
          <hr />
          <h1 className="pl-10 pt-5">Ветеринарное оборудование</h1>
        </div>
        <div className=" border border-[#E5E2EE] rounded-lg h-[400px]">
          <img src={img3} alt="" className=" w-full h-[80%] rounded-t-lg" />
          <hr />
          <h1 className="pl-10 pt-5">Анестезиология</h1>
        </div>{" "}
        <div className=" row-span-2 border border-[#E5E2EE] rounded-lg h-[822px] ">
          <img src={img2} alt="" className=" w-full h-[90%] rounded-t-lg" />
          <hr />
          <h1 className="pl-10 pt-5">Хирургические инструменты</h1>
        </div>{" "}
        <div className=" border border-[#E5E2EE] rounded-lg h-[400px]">
          <img src={img4} alt="" className=" w-full h-[79%] rounded-t-lg" />
          <hr />
          <h1 className="pl-10 pt-5">
            Физиотерапевтическое <br /> оборудование
          </h1>
        </div>
        <div className="  border border-[#E5E2EE] rounded-lg h-[400px]">
          <img src={img5} alt="" className=" w-full h-[79%] rounded-t-lg" />
          <hr />
          <h1 className="pl-10 pt-5">
            Стоматологическое <br /> оборудование
          </h1>
        </div>
      </div>
    </>
  );
};

export default CatalogList;
