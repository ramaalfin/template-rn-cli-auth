import axios from "../index";

export const getInformasi = async () => {
  const response = await axios.get(
    `${process.env.EXPO_BASE_URL}/mobile/get_info`
  );

  return response;
};
