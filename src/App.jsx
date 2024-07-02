import React from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/index";
import Footer from "./components/Footer/index";

const App = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <Header />
      <MainSection/>
      <Footer/>
    </div>
  );
};

export default App;
