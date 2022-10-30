import React, { useEffect, useState } from "react";
import { FaDog } from "react-icons/fa";
import { GiWateringCan } from "react-icons/gi";
import { ImSun } from "react-icons/im";
import { TbShovel } from "react-icons/tb";
import { Link, useSearchParams } from "react-router-dom";
import { getOneData } from "../utils/getOneData";

const Description = ({ url, name, description, price, prop }) => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const classification = searchParams.get("classification");
  const id = searchParams.get("id");

  useEffect(() => {
    async function getData() {
      if (!!classification && !!id) {
        const doc = await getOneData(classification, id);
        setProduct(doc.data());
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div className="container">
      <div className="mt-5">
        <Link to="/" className="underline text-blue-500">
          home
        </Link>{" "}
        &gt;{" "}
        <Link
          to={`/product/${classification}`}
          className="underline text-blue-500">
          {classification}
        </Link>{" "}
        &gt; <span>{!loading && product.name}</span>
      </div>
      <div className="flex justify-between py-8">
        <div className="w-2/5 h-lg p-10 bg-lightTeal">
          <img
            src={!loading ? product.url : ""}
            alt={name}
            width="350"
            className=" h-100 object-contain mx-auto"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl mb-8">{!loading ? product.name : ""}</h1>
          <p className="text-slate-500">
            {!loading ? product.description : ""}
          </p>
          <h3 className="text-2xl mt-10 ml-5">
            &#x20B9; {!loading ? product.price : ""}
          </h3>
          <button className="bg-lightGreen text-white w-3/4 py-5 text-center rounded-sm mt-5 hover:bg-darkGreen">
            Add to cart
          </button>
          {!loading && (
            <ul className="border-2 border-black w-1/2 text-center mt-10 rounded-sm">
              <li className="flex border-b-2 border-black p-2">
                <FaDog className="text-orange-500" />
                <p className="ml-2">{product.prop?.pets}</p>
              </li>
              <li className="flex border-b-2 border-black p-2">
                <GiWateringCan className="text-lightGreen" />
                <p className="ml-2">{product.prop?.water}</p>
              </li>
              <li className="flex border-b-2 border-black p-2">
                <ImSun className="text-yellow-600" />
                <p className="ml-2">{product.prop?.sunlight}</p>
              </li>
              <li className="flex p-2">
                <TbShovel className="text-slate-400" />
                <p className="ml-2">{product.prop?.exp}</p>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
