import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Description from "../Pages/Description";
import { removeItems, setItems } from "../redux/features/userSlice";

const card = ({ id, img, name, url, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [imgLoading, setImgLoading] = useState(true);
  const [order, setOrder] = useState(0);
  const { items } = useSelector((state) => state.user);
  const localItem = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if (localItem?.length > 0) {
      localItem.map((item) => {
        if (item.id === id) {
          setOrder(1);
        }
      });
    }
  }, [localItem]);

  const addTocart = () => {
    setOrder(1);
    dispatch(setItems({ id, name, price, count: 1, img }));
  };

  const deleteItems = () => {
    const removedItem = items.filter((item) => {
      return item.id !== id;
    });
    dispatch(removeItems(removedItem));
    setOrder(0);
  };
  return (
    <div className="w-full max-w-sm bg-lightTeal rounded-lg shadow-md">
      <Link
        to={`/description?classification=${params.id}&id=${id}`}
        className="block ">
        <img
          className={`${
            imgLoading ? "hidden" : "visible"
          } p-4 rounded-t-lg w-full h-72 object-cover`}
          src={img}
          alt="product image"
          onLoad={() => setImgLoading(false)}
        />

        {imgLoading && (
          <div className="rounded-t-lg p-4 w-full h-72 animate-pulse bg-slate-100"></div>
        )}
      </Link>
      <div className="px-5 pb-5">
        <Link
          to={`/description?classification=${params.id}&id=${id}`}
          className="h-20 inline-block text-center pt-2">
          <h5 className="text-xl text-center pb-4 font-semibold text-gray-900">
            {name}
          </h5>
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-3xl  text-gray-900">&#x20B9;{price}</span>
          {order > 0 ? (
            <div className="flex items-center">
              <button
                onClick={() => navigate("/cart")}
                className="text-sm font-bold text-white px-4 py-2.5 rounded-md shadow-md bg-darkGreen">
                go to cart
              </button>
              <button
                className="text-sm font-bold text-black px-4 py-2.5 ml-1 rounded-md shadow-md bg-yellow-400"
                onClick={() =>
                  navigate(`/description/?classification=${params.id}&id=${id}`)
                }>
                view product
              </button>
            </div>
          ) : (
            <button
              className="cursor-pointer text-white bg-lightGreen font-bold outline-none rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={addTocart}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default card;
