import React from "react";
import Header from "./components/Header/indexHeader";
import Footer from "./components/Footer/FooterEnd/Footerr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gmt from "./home/Gmt";
import Dostafka from "./pages/Dostafka/Dostafka";
import Oplata from "./pages/Oplata/Oplata";
import Garantiya from "./pages/Garantiya/Garantiya";
import Favorite from "./pages/Favorite/Favorite";
import Blog from "./pages/Blog/Blog";
import Katalog from "./pages/Katalog/Katalog";
import Labaratoriya from "./components/Detals/Labaratoriya";
import Okompaniya from "./pages/About/Okompaniya";
import Kontakt from "./pages/Kontakt/Kontakt";
import Aksiya from "./pages/Aksiya/Aksiya";
import CtranisaTovar from "./pages/CtranisaTovar/CtranisaTovar";
import Cabinet from "./pages/Cabinet/Cabinet";
import Prizvoditel from "./pages/Prizvoditel/Prizvoditel";
import FAQ from "./pages/FAQ/Faq";
import Ctravleniya from "./pages/Ctravleniya/Ctravleniya";
import KabinetPodkluche from "./pages/Katalog/KabinetPodkluche";
import Uslugi from "./pages/Oplata/Uslugi";
import Scroll from "./home/Scroll";
import Korzinka from "./pages/Korzinka/Korzinka";

const App = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <BrowserRouter>
        <div className=" fixed w-full bg-[#f8f7f3] z-[999]">
          <Header />
        </div>{" "}
        <Scroll />
   <div className="pt-[240px]">
   <Routes>
          <Route path="/" element={<Gmt />} />
          <Route path="/okompaniya" element={<Okompaniya />} />
          <Route path="/dostafka" element={<Dostafka />} />
          <Route path="/oplata" element={<Oplata />} />
          <Route path="/garantiya" element={<Garantiya />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/korzinka" element={<Korzinka/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/labaratoriya" element={<Labaratoriya />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/aksiya" element={<Aksiya />} />
          <Route path="/katalog/labaratoriya/:id" element={<CtranisaTovar />} />
          <Route path="/cobinet" element={<Cabinet />} />
          <Route path="/prizvoditel" element={<Prizvoditel />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ctravleniya" element={<Ctravleniya />} />
          <Route path="/podkluche" element={<KabinetPodkluche />} />
          <Route path="/uslugi" element={<Uslugi />} />
        </Routes>
   </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
