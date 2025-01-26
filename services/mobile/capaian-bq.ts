import axios from "../index";

export interface PenilaianProps {
  id_tahun_ajaran: number;
  id_semester: number;
  bulan: number;
  id_siswa: number;
}

export const getCapaianBQ = async (data: PenilaianProps) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/mobile/get_capaian_bq`,
    data
  );
};
