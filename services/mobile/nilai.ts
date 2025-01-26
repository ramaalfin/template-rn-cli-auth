import axios from "../index";

export interface PenilaianProps {
  id_tahun_ajaran: number;
  id_semester: number;
  id_guru_mapel: number;
  id_siswa: number;
}

export const getNilai = async (data: PenilaianProps) => {
  return await axios.post(
    `${process.env.EXPO_PUBLIC_API_URL}/mobile/get_nilai`,
    data
  );
};
