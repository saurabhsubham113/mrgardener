import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeItems } from "../redux/features/userSlice";

const Thankyou = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeItems([]));
    // setTimeout(() => {
    //   window.location = "/";
    // }, 2000);

  }, []);

  return (
    <div className="text-center mt-10">
      <h1>Thank you for shopping with us</h1>
      <Link
        to="/"
        className="inline-block mt-3 bg-lightGreen px-3 py-3 rounded-sm text-white">
        Go to Home
      </Link>
    </div>
  );
};

export default Thankyou;
