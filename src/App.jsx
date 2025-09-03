import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CoverBanner from "./components/CoverBanner/CoverBanner";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CoverBanner />
      <Footer />
    </div>
  );
};

export default App;
