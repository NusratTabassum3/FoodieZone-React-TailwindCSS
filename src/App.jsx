import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CoverBanner from "./components/CoverBanner/CoverBanner";
import Service from "./components/Services/Services";
import AppStore from "./components/AppStore/AppStore";
import Banner from "./components/Banner/Banner";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      {/* <CoverBanner /> */}
      <AppStore />
      <Footer />
    </div>
  );
};

export default App;
