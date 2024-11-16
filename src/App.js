import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import BrandIcons from "./components/BrandIcons";
import Accordion from "./components/Accordion";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BrandIcons/>
      <Features />
      <Accordion/>
      <Testimonials/>
      <Footer />

    </div>
  );
};

export default App;
