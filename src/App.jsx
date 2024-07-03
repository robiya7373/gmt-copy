import React from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/index";
import Footer from "./components/Footer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/" element={<MainSection />} />
          <Route path="/" element={<MainSection />} />
          <Route path="/" element={<MainSection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
