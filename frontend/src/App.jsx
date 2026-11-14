import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homescreen from "./Components/Homescreen";

import About from "./Pages/About";
import Menu from "./Pages/Menu";
import PrivateDining from "./Pages/PrivateDining";
import Reservation from "./Pages/Reservation";
import Contact from "./Pages/Contact";
import Apply from "./Pages/Apply";

function App() {
  return (
    <Router>
      <div className="min-h-100vh flex-col bg-black text-white">
        <Header />

        <div className="pt-24 flex-grow">
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/private-dining" element={<PrivateDining />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply/>} />
          </Routes>
        </div>

        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
