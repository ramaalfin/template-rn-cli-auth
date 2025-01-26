import axios from "../index";

interface TambahPerizinan {
  id_siswa: number;
  id_jenis_perizinan: string;
  tgl: string;
  keterangan: string;
  file: string;
  entry_by: number;
}

export const getPerizinanBySiswa = async (id_siswa: number) => {
  const response = await axios.get(
    `${process.env.EXPO_BASE_URL}/mobile/perizinan/${id_siswa}`
  );

  return response;
};

export const getJenisPerizinan = async () => {
  const response = await axios.get(
    `${process.env.EXPO_BASE_URL}/mobile/jenis_perizinan`
  );

  return response;
};

export const storePerizinan = async (data: TambahPerizinan) => {
  const response = await axios.post(
    `${process.env.EXPO_BASE_URL}/mobile/perizinan`,
    data
  );

  return response;
};
