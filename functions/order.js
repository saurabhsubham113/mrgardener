import Razorpay from "razorpay";
import { nanoid } from "nanoid";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

export const handler = async (event, context) => {
  //cors
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }
  const instance = new Razorpay({
    key_id: process.env.VITE_RAZORPAY_PUBLIC,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  const { amount } = JSON.parse(event.body);

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: nanoid(5),
  };
  if ((event.httpMethod = "POST")) {
    try {
      const result = await instance.orders.create(options);
      return { statusCode: 200, headers, body: JSON.stringify(result) };
    } catch (error) {
      return { statusCode: 400, headers, body: JSON.stringify(error) };
    }
  }
};
