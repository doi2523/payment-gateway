import axios from "axios";
import { PAYMENT_API_URL } from "../constants/urlAPI";

export const GetInfoOrder = async (orderId) => {
  try {
    const res = await axios.post(`${PAYMENT_API_URL}/api/od`, {
      id: orderId,
    });
    const orderData = res?.data?.data;
    return orderData;
  } catch (err) {
    console.warn("❌ React Failed", err);
  }
};

export const CancelToOrder = async (orderId, orderCode) => {
  try {
    const res = await axios.post(
      `${PAYMENT_API_URL}/api/orders/cancel`,
      {
        orderId,
        orderCode,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const orderData = res?.data?.data;
    return orderData;
  } catch (err) {
    console.warn("❌ React Failed", err);
  }
};
