import React, { useState } from "react";
import aboutus from "../assets/aboutus.jpg";

const AboutUs = () => {
  const [imgLoading, setImgLoading] = useState(true);
  return (
    <main>
      { <img
        src={aboutus}
        alt="aboutius"
        className={`${imgLoading ? 'hidden' : 'visible'} w-full h-72 object-cover`}
        onLoad={() => setImgLoading(false)}
      />}

      {imgLoading && (
        <div className="animate-pulse w-full h-72 bg-green-100"></div>
      )}
      <section>
        <h1 className="text-darkGreen text-5xl font-semibold text-center py-6">
          About Us
        </h1>
        <p className="container text-gray-800 text-xl">
          <span className="text-lightGreen text-4xl ">Mr. Gardener</span>{" "}
          germinated in 2022 from a promise to make ‘green and healthy’ a click
          away for all Indians Having plants in our homes or in our offices
          doesn’t just look good, it also boosts our mood, makes us more
          productive, and cleans the air around us by absorbing toxins Most of
          us being urban dwellers spending their days in apartments with limited
          access to parks and ecological reserves, have no way of feeling close
          to nature and experiencing the benefits of being around plants.
          Ordering a pizza is easy but ever heard of ordering a plant to your
          doorstep? This is where Mr. Gardener comes in.
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
