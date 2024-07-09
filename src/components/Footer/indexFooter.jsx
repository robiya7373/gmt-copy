import React from "react";
import BredGramp from "./BredGramp/BredGramp";
import Kompaniya from "./Kompaniya/Kompaniya";
import Maps from "./Maps/Maps";
import Gmail from "./Gmail/Gmail";

const index = () => {
  return (
    <div>
      <BredGramp />
      <Kompaniya />
      <div className="max-w-[1440px] mx-auto px-5">
        {" "}
        <Maps />
      </div>
      <Gmail />
    </div>
  );
};

export default index;
