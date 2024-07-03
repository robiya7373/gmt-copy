import React from "react";
import BredGramp from "./BredGramp/BredGramp";
import Kompaniya from "./Kompaniya/Kompaniya";
import Maps from "./Maps/Maps";
import Gmail from "./Gmail/Gmail";
import FooterEnd from "./FooterEnd/Footerr";

const index = () => {
  return (
    <div>
      <BredGramp />
      <Kompaniya />
      <Maps />
      <Gmail/>
      <FooterEnd/>
    </div>
  );
};

export default index;
