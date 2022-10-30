import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../redux/features/userSlice";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const addItems = (id) => {
    const increaseCount = items.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    dispatch(removeItems(increaseCount));
  };

  const getPrice = () => {
    let price = 0;
    items.map((item) => {
      price += item.count * item.price;
    });
    return price;
  };
  const deleteItems = (id) => {
    dispatch(removeItems(items.filter((item) => item.id !== id)));
  };

  const decreaseItems = (id) => {
    const decreaseCount = items.map((item) => {
      if (item.id === id && item.count >= 1) {
        return { ...item, count: item.count - 1 };
      } else if (item.count < 1) {
        return { ...item, count: 0 };
      }
      return item;
    });
    dispatch(removeItems(decreaseCount));
  };

  return (
    <main className="bg-lightTeal" style={{ height: "90vh" }}>
      <section className="container">
        {items.length > 0 ? (
          <>
            <h1 className="text-center text-3xl py-5 font-bold">
              Checkout your items
            </h1>
            <div className="h-96 overflow-y-scroll shadow-md p-3 bg-white rounded-md">
              {items.map((item) => {
                if (item.count === 0) {
                  deleteItems(item.id);
                }
                return (
                  <div
                    key={item.id}
                    className="flex justify-around items-center pb-4 border-t-2 border-black last:border-b-2">
                    <div className="w-24 mr-8">
                      <img
                        src={item.img}
                        className=" w-full rounded-xl object-cover flex-1"
                      />
                    </div>

                    <div className="flex-1">
                      <p>Name : {item.name}</p>
                      <p>&#x20B9; {item.price}</p>
                    </div>
                    <div className="flex flex-col flex-1">
                      <p>quantity:</p>
                      <div className="flex items-center">
                        <button
                          className="px-3 rounded-md shadow-md text-white font-bold text-3xl bg-red-500"
                          onClick={(_, id = item.id) => decreaseItems(id)}>
                          -
                        </button>
                        <p className="mx-3"> {item.count}</p>
                        <button
                          className="px-2 rounded-md shadow-md text-white font-bold text-3xl bg-lightGreen"
                          onClick={(_, id = item.id) => addItems(id)}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <p>Total</p>
                      <p>&#x20B9; {item.count * item.price}</p>
                    </div>
                    <RiDeleteBin5Line
                      className="text-red-600 text-3xl cursor-pointer"
                      onClick={(_, id = item.id) => deleteItems(id)}
                    />
                  </div>
                );
              })}
            </div>
            {!!getPrice() && (
              <>
                <p className="text-center font-semibold text-2xl mt-4">
                  Total : &#x20B9; {getPrice()}
                </p>
                <button
                  onClick={() => navigate('/checkout')}
                  className="mx-auto flex mt-4 px-3 py-2 bg-yellow-300 rounded-md shadow-lg hover:bg-yellow-400">
                  Checkout
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <p className="text-center text-3xl pt-12">
              Please add items to your cart
            </p>
            <button
              onClick={() => navigate("/product/indoorAndOutdoor")}
              className="text-white font-semibold rounded-sm shadow-md text-center mx-auto flex mt-4 px-2 py-2 bg-lightGreen">
              Go to Products
            </button>
          </>
        )}
      </section>
    </main>
  );
};

export default Cart;
