import axios from "../index";

export const getMapelBySiswaByTahunAjaran = async (
  id_siswa: number,
  tahun_ajaran: number
) => {
  return await axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}/mobile/mapel_by_siswa/${id_siswa}/${tahun_ajaran}`
  );
};
