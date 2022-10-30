import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/card";
import useData from "../hooks/useData";
import {
  errorProducts,
  loadProducts,
  resetProducts,
  successproducts,
} from "../redux/features/productSlice";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { product, isLoading } = useSelector((state) => state.product);

  const getData = useCallback(async () => {
    try {
      dispatch(loadProducts());
      const option = !!data ? data : params.id;
      const res = await useData(option);
      dispatch(successproducts(res));
    } catch (error) {
      dispatch(errorProducts());
    }
  }, [params.id,data]);

  useEffect(() => {
    getData();
    return () => {
      dispatch(resetProducts());
    };
  }, [data]);

  return (
    <div className="flex flex-wrap justify-center container gap-10 my-16">
      {product.length > 0 &&
        product.map((p) => {
          return (
            <Card
              key={p.id}
              id={p.id}
              img={p.data.url}
              name={p.data.name}
              price={p.data.price}
              loading={isLoading}
            />
          );
        })}
    </div>
  );
};

export default Product;
