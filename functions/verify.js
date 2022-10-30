import crypto from "crypto";

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
  const { orderId, razorpayPaymentId, razorpaySignature } = JSON.parse(
    event.body
  );
  const base = orderId + "|" + razorpayPaymentId;
  console.log({ orderId, razorpayPaymentId, razorpaySignature });
  if ((event.httpMethod = "POST")) {
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(base.toString())
      .digest("hex");

    if (razorpaySignature === generatedSignature) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          orderId,
          razorpayPaymentId,
          razorpaySignature,
          message: "Payment Successfull",
          status: true,
        }),
      };
    }

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: false,
        message: "payment signature invalid",
      }),
    };
  }
};
