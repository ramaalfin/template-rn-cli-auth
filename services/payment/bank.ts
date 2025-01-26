import axios from "../index";

export const getAllBank = async () => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/payment/get_bank`
  );
};
