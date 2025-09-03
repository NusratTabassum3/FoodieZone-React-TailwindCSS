import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CoverBanner from "./components/CoverBanner/CoverBanner";
import Service from "./components/Services/Services";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <CoverBanner />
      <Footer />
    </div>
  );
};

export default App;
