import React from "react";
import Katagoriy from "./components/Katagoriy";
import Kabinet from "./components/Kabinet";
import Vibirayut from "./components/Vibirayut";
import Tovar from "./components/Tovar";
import Klent from "./components/Klent";
import Brend from "./components/Brend";
import Carousel from "./components/Carousel";


const index = () => {
  return (
    <div>
      <Carousel/>
      <Katagoriy />
      <Kabinet />
      <Vibirayut />
      <Tovar />
      <Klent />
      <Brend />
    </div>
  );
};

export default index;
