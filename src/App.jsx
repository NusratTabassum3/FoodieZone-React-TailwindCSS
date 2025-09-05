import React from "react";
import AOS from "aos";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CoverBanner from "./components/CoverBanner/CoverBanner";
import Service from "./components/Services/Services";
import AppStore from "./components/AppStore/AppStore";
import Banner from "./components/Banner/Banner";
import Testimonial from "./components/Testimonial/Testimonial";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      {/* <CoverBanner /> */}
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
