import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { DisplayRazorPay } from "../hooks/useRazorPay";
import FormComponent from "../components/Form";

const Checkout = () => {
  const { items, user } = useSelector((state) => state.user);

  const getPrice = () => {
    let price = 0;
    items.map((item) => {
      price += item.count * item.price;
    });
    return price;
  };

  const itemId = () => {
    return items.map((item) => {
      return {
        productId: item.id,
        count: item.count,
        name: item.name,
        totalPrice: item.count * item.price,
      };
    });
  };
  const generateOrder = useCallback(
    async (user) => {
      const res = await axios.post(import.meta.env.VITE_SERVERLESS_ORDER, {
        amount: getPrice(),
      });
      if (res.data.id) {
        DisplayRazorPay(res.data.amount, res.data.id, user, itemId());
      }
    },
    [getPrice()]
  );

  return (
    <div className="flex container my-12 gap-12">
      <div className="w-1/2 border-2 border-black rounded-md mx-auto px-4 py-8">
        <FormComponent order={generateOrder} itemdetail={itemId()} />
      </div>
      <div className="border-l-2 border-l-black bg-lightTeal"></div>
      <div className="w-2/5  px-8 bg-lightTeal pt-8 rounded-sm">
        {items.map((item) => (
          <div className="flex  items-center pb-4" key={item.id}>
            <div className="w-16 h-16 rounded relative">
              <img
                src={item.img}
                alt="product"
                className="object-cover w-16 h-16"
              />
              <span className="absolute bg-yellow-400 w-5 h-5 rounded-full text-center text-black -top-4 -right-2">
                {item.count}
              </span>
            </div>
            <div className="flex flex-1 justify-between ml-5">
              <p className="text-sm">{item.name}</p>
              <p>&#x20B9; {item.count * item.price}</p>
            </div>
          </div>
        ))}

        <hr className=" border-0 border-b-2 border-black" />
        <div className="flex justify-between pt-4">
          <p>Total</p>
          <p>&#x20B9; {getPrice()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
