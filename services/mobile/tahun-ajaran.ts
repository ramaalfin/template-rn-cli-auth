import axios from "../index";

export const getTahunAjaran = async () => {
  return await axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/mobile/tahun_ajaran`
  );
};
