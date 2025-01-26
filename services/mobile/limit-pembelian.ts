import axios from "../index";

interface LimitPembelian {
  id_siswa: number;
  limit_pembelian: number;
}

export const limitPembelian = async (data: LimitPembelian) => {
  const response = await axios.post(
    `${process.env.EXPO_BASE_URL}/mobile/update_limit_kantin_siswa`,
    data
  );

  return response;
};
