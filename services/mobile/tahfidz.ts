import axios from "../index";

export const getTahfidzByIdSiswa = async (id_siswa: number) => {
  const response = await axios.get(
    `${process.env.EXPO_BASE_URL}/mobile/tahfidz/${id_siswa}`
  );

  return response;
};
