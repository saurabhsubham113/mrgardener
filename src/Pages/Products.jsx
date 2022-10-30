import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import useData from "../hooks/useData";
import {
  errorProducts,
  loadProducts,
  successproducts,
} from "../redux/features/productSlice";
import Product from "./Product";

const LINKS = [
  { name: "Indoor and Outdoor Plants", url: "indoorAndOutdoor" },
  { name: "Hanging Plants", url: "hangingPlant" },
  { name: "Flowering Plants", url: "floweringPlant" },
  { name: "Cacti and Succelents Plants", url: "cactiAndSucculents" },
];
const Products = () => {
  const [data, setData] = useState("indoorAndOutdoor");

  const { isLoading } = useSelector((state) => state.product);

  console.log(isLoading);
  return (
    <div className="container flex gap-5">
      <ul className="border-2 border-black w-2/5 text-center mt-10 rounded-sm h-100 sticky">
        {LINKS.map((link) => (
          <li
            key={link.name}
            onClick={() => {
              setData(link.url);
            }}
            className={`${
              link.url === data
                ? "bg-lightGreen hover:bg-lightGreen"
                : "bg-white"
            } cursor-pointer border-b-2 border-black p-2 hover:bg-lightTeal last:border-none`}>
            {link.name}
          </li>
        ))}
      </ul>

      <Product data={data} />
    </div>
  );
};

export default Products;
