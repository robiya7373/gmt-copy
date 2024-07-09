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
import Korzinka from "./pages/Korzinka/Korzinka";
import CtranisaTovar from "./pages/CtranisaTovar/CtranisaTovar";

const App = () => {
  return (
    <div className="bg-[#f3f8f4]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Gmt />} />
          <Route path="/okompaniya" element={<Okompaniya />} />
          <Route path="/dostafka" element={<Dostafka />} />
          <Route path="/oplata" element={<Oplata />} />
          <Route path="/garantiya" element={<Garantiya />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/korzinka" element={<Korzinka />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/labaratoriya" element={<Labaratoriya />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/aksiya" element={<Aksiya />} />
          <Route path="/katalog/labaratoriya/:id" element={<CtranisaTovar />} />
     

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
