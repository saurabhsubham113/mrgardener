import axios from "axios";
import { addUser } from "../utils/addUser";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const DisplayRazorPay = async (amount, id, user, item) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const options = {
    key: import.meta.env.VITE_RAZORPAY_PUBLIC,
    amount: amount * 100,
    currency: "INR",
    name: "Mr Gardener",
    description: "Buy a green plants",
    // image: { logo },
    order_id: id,
    handler: async function (response) {
      const data = {
        orderCreationId: id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const res = await axios.post(import.meta.env.VITE_SERVERLESS_VERIFY, {
        razorpayPaymentId: response.razorpay_payment_id,
        razorpaySignature: response.razorpay_signature,
        orderId: id,
      });
      delete res.data.status;

      await addUser({
        user: user,
        response: res.data,
        item: item,
        amount: amount / 100,
      });
      window.location = "/thankyou";
    },
    prefill: {
      name: user.firstName,
      email: user.email,
      contact: user.mobile,
    },
    notes: {
      address: "Mr gardener office, Gujrat",
    },
    theme: {
      color: "#00b863",
    },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.on("payment.failed", (response) => {
    console.log(response);
  });
  razorpay.open();
};
