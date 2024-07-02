import React from "react";
import Katagoriy from "./components/Katagoriy";
import Kabinet from "./components/Kabinet";
import Vibirayut from "./components/Vibirayut";
import Tovar from "./components/Tovar";
import Klent from "./components/Klent";
import Brend from "./components/Brend";

const index = () => {
  return (
    <div>
      <Katagoriy />
      <Kabinet />
      <Vibirayut/>
      <Tovar/>
      <Klent/>
      <Brend/>
    </div>
  );
};

export default index;
