import React from "react";
import Card from "../components/card";
import indoor from "../assets/collections/indoor.png";
import cacti from "../assets/collections/cacticacti.png";
import flowering from "../assets/collections/flowering.png";
import hanging from "../assets/collections/hanging.png";
import { Link } from "react-router-dom";

const collection = [
  { id: 1, img: indoor, url: "indoorAndOutdoor" },
  { id: 2, img: flowering, url: "floweringPlant" },
  { id: 3, img: cacti, url: "cactiAndSucculents" },
  { id: 4, img: hanging, url: "hangingPlant" },
];

const Products = () => {
  return (
    <div className="my-10 container flex flex-wrap gap-10">
      {collection.map(({ id, img, url }) => (
        <Link to={`product/${url}`} key={id}>
          <img src={img} alt="plant collection" />
        </Link>
      ))}
    </div>
  );
};

export default Products;
