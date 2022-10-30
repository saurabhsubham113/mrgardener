import React from "react";
import Footer from "../Views/Footer";
import Hero from "../Views/Hero";
import HowWeWork from "../Views/HowWeWork";
import Products from "../Views/ProductCollection";

const Home = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <Products />
        <HowWeWork />
      </main>
      <Footer />
    </>
  );
};

export default Home;
