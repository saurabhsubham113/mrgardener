import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-hero-img bg-no-repeat bg-cover h-96 flex justify-center items-center">
      <div className="text-center">
        <h1
          style={{
            textShadow:
              "-1px -1px 0 #00b863, 1px -1px 0 #00b863, -1px 1px 0 #00b863, 1px 1px 0 #00b863",
          }}
          className="text-white text-6xl font-pacific">
          The Best Plant Under One Roof
        </h1>
        <Link
          to="/products"
          className="inline-block shadow-lg mt-3.5 px-3 py-3 bg-lightGreen text-white font-semibold rounded-md">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;