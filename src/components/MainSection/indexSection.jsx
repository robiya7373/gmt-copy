import React from "react";
import Katagoriy from "./Katagoriy/Katagoriy";
import Kabinet from "./Kabinet/Kabinet";
import Vibirayut from "./Vibirayut/Vibirayut";
import Tovar from "./Tovar/Tovar";
import Klent from "./Klent/Klent";
import Brend from "./Brend/Brend";
import Carousel from "./Corousel/Carousel";

const index = () => {
  return (
    <div>
      <Carousel />
      <Katagoriy />
      <Kabinet />
      <div className="max-w-[1440px] mx-auto p-5 relative">
        <Vibirayut />
      </div>
      <Tovar />
      <Klent />
      <div className="max-w-[1440px] mx-auto px-5">
        <Brend />
      </div>
    </div>
  );
};

export default index;
