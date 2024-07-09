import React from "react";
import Tovar from "../../components/MainSection/Tovar/Tovar";
import Kabinet from "../../components/MainSection/Kabinet/Kabinet";
import Brend from "../../components/MainSection/Brend/Brend";
import Map from "../../components/Footer/Maps/Maps";
import Gmail from "../../components/Footer/Gmail/Gmail";

const CtranisaTovar = () => {
  return (
    <div>
      <Kabinet />
      <Tovar />
      <div className="max-w-[1440px] mx-auto px-5 ">
        <Brend />
      </div>
      <Map />
      <Gmail />
    </div>
  );
};

export default CtranisaTovar;
