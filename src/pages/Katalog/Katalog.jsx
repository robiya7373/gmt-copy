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
      <div className="max-w-[1440px] mx-auto px-5 flex gap-10">
        <CategoryList />
        <CatalogList />
      </div>
      <Kabinet />
      <div className="max-w-[1440px] mx-auto px-5 mt-20">
        <Vibirayut />{" "}
      </div>
      <Tovar />
      <div className="max-w-[1440px] mx-auto px-5 ">
        <Brend />{" "}
      </div>
      <Kompaniya />
      <BredGramp />
       <Map/>
      <Gmail />
    </>
  );
};

export default Katalog;
