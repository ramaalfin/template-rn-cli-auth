import axios from "../index";

export const getAllGuru = async () => {
  const response = await axios.get(`${process.env.EXPO_BASE_URL}/mobile/guru`);

  return response;
};
